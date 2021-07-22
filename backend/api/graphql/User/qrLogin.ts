import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { AuthenticationError } from '../../errors/AuthenticationError'

// get login session
export const GetLoginSessionPayload = objectType({
  name: 'GetLoginSessionPayload',
  definition: t => {
    t.nonNull.id('loginSessionId')
  }
})
export const GetLoginSession = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('getLoginSession', {
      type: nonNull('GetLoginSessionPayload'),
      resolve: async (_, __, { prisma }) => {
        const loginSession = await prisma.loginSession.create({ data: {} })

        return {
          loginSessionId: loginSession.id
        }
      }
    })
  }
})

// sign the login session
const SIGNED_LOGIN_SESSION_EVENT = 'LOGIN_SESSION_SIGNED'
export const SignLoginSessionInput = inputObjectType({
  name: 'SignLoginSessionInput',
  definition: t => {
    t.nonNull.id('loginSessionId')
  }
})
export const SignLoginSessionPayload = objectType({
  name: 'SignLoginSessionPayload',
  definition: t => {
    t.nonNull.id('loginSessionId')
  }
})
export const SignLoginSession = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('signLoginSession', {
      args: { input: nonNull('SignLoginSessionInput') },
      type: nonNull('SignLoginSessionPayload'),
      resolve: async (_, { input }, { userId, jwtService, prisma, pubsub }) => {
        if(!userId) throw AuthenticationError()
        const token = jwtService.signToken({ sub: userId })

        await prisma.loginSession.delete({ where: { id: input.loginSessionId }})

        pubsub.publish({
          topic: SIGNED_LOGIN_SESSION_EVENT,
          payload: {
            loginSessionId: input.loginSessionId,
            token
          }
        })

        return {
          loginSessionId: input.loginSessionId
        }
      }
    })
  }
})

// wait for login session signed
export const WaitForSignedLoginSessionInput = inputObjectType({
  name: 'WaitForSignedLoginSessionInput',
  definition: t => {
    t.nonNull.id('loginSessionId')
  }
})
export const WaitForSignedLoginSessionPayload = objectType({
  name: 'WaitForSignedLoginSessionPayload',
  definition: t => {
    t.nonNull.id('loginSessionId')
    t.nonNull.string('token')
  }
})
export const WaitForSignedLoginSession = extendType({
  type: 'Subscription',
  definition: t => {
    t.field('waitForSignedLoginSession', {
      args: { input: nonNull('WaitForSignedLoginSessionInput') },
      type: 'WaitForSignedLoginSessionPayload',
      subscribe: (_, __, ctx) => ctx.pubsub.subscribe(SIGNED_LOGIN_SESSION_EVENT),
      resolve: (payload, { input }) => {
        const data = payload as any
        if(data.loginSessionId !== input.loginSessionId) return null

        return {
          loginSessionId: data.loginSessionId,
          token: data.token,
        }
      }
    })
  }
})