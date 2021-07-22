import { extendType, inputObjectType, nonNull, objectType } from 'nexus'

export const LoginInput = inputObjectType({
  name: 'LoginInput',
  definition: t => {
    t.nonNull.string('email')
    t.nonNull.string('password')
  }
})

export const LoginPayload = objectType({
  name: 'LoginPayload',
  definition: t => {
    t.nonNull.string('token')
    t.nonNull.field('user', { type: 'User' })
  }
})

export const WrongCredentialError = new Error('Wrong credentials!')
export const LoginMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('login', {
      args: { input: nonNull('LoginInput') },
      type: nonNull('LoginPayload'),
      resolve: async (_, { input: { email, password } }, ctx) => {
        const user = await ctx.prisma.user.findUnique({ where: { email }})
        if(!user) throw WrongCredentialError

        const isMatchPassword = await ctx.cryptoService.comparePassword(password, user.password)
        if(!isMatchPassword) throw WrongCredentialError

        const token = ctx.jwtService.signToken({ sub: user.id })

        return {
          token,
          user,
        }
      }
    })
  }
})