import { extendType, inputObjectType, nonNull, objectType } from 'nexus'

export const SignupInput = inputObjectType({
  name: 'SignupInput',
  definition: t => {
    t.nonNull.string('email')
    t.nonNull.string('password')
  }
})

export const SignupPayload = objectType({
  name: 'SignupPayload',
  definition: t => {
    t.nonNull.string('token')
    t.nonNull.field('user', { type: 'User' })
  }
})

export const UserExistedError = new Error('Email is existed!')
export const SignupMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('signup', {
      args: { input: nonNull('SignupInput') },
      type: nonNull('SignupPayload'),
      resolve: async (_, { input: { email, password } }, ctx) => {
        const isExisted = Boolean(await ctx.prisma.user.findFirst({ where: { email }}))
        if(isExisted) throw UserExistedError

        const hashedPassword = await ctx.cryptoService.hashPassword(password)

        const user = await ctx.prisma.user.create({
          data: {
            email,
            password: hashedPassword,
          }
        })
        const token = ctx.jwtService.signToken({ sub: user.id })

        return {
          token,
          user,
        }
      }
    })
  }
})