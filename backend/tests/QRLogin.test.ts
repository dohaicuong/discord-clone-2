import { hashPassword } from '../api/context/cryptoService'
import { AuthenticationError } from '../api/errors/AuthenticationError'
import { loginRequest as login } from './Login.test'
import { createTestContext } from './__helpers'

const ctx = createTestContext()

describe('QR login', () => {
  const email = 'qrlogin@gmail.com'
  const password = '123456'

  beforeAll(async () => {
    const hashedPassword = await hashPassword(password)
    const user = await ctx.prisma.user.create({ data: { email, password: hashedPassword }})
    if(!user) throw new Error('There is something wrong with mocking data')
  })

  it('should throw error if user not login and try to sign login session', async () => {
    const getLoginSessionRequest = await ctx.client.mutate(`
      mutation { getLoginSession { loginSessionId } }
    `)
    expect(getLoginSessionRequest.data?.getLoginSession).toHaveProperty('loginSessionId')
    const loginSessionId = getLoginSessionRequest.data?.getLoginSession?.loginSessionId

    const signLoginSessionRequest = await ctx.client.mutate(`
      mutation {
        signLoginSession(input: { loginSessionId: "${loginSessionId}" }) {
          loginSessionId
        }
      }
    `)
    expect(signLoginSessionRequest.data).toBeNull()
    expect(signLoginSessionRequest.errors?.[0].message).toBe(AuthenticationError().message)
  })

  it('should return token in subscription', async () => {
    const getLoginSessionRequest = await ctx.client.mutate(`
      mutation { getLoginSession { loginSessionId } }
    `)
    expect(getLoginSessionRequest.data.getLoginSession).toHaveProperty('loginSessionId')
    const loginSessionId = getLoginSessionRequest.data?.getLoginSession?.loginSessionId

    ctx.client.subscribe({
      query: `
        subscription {
          waitForSignedLoginSession(input: {
            loginSessionId: "${loginSessionId}"
          }) {
            loginSessionId
            token
          }
        }
      `,
      onData: res => {
        expect(res.data.waitForSignedLoginSession).toHaveProperty('loginSessionId')
        expect(res.data.waitForSignedLoginSession).toHaveProperty('token')
      }
    })

    const loginRequest = await login(email, password)
    const { token: loginToken } = loginRequest.data.login
    const signLoginSessionRequest = await ctx.client.mutate(
      `mutation {
        signLoginSession(input: { loginSessionId: "${loginSessionId}" }) {
          loginSessionId
        }
      }`,
      {
        headers: {
          'authorization': `Bearer ${loginToken}`
        }
      }
    )
    expect(signLoginSessionRequest.data?.signLoginSession).toHaveProperty('loginSessionId')
  })
})