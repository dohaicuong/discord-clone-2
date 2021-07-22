import { createTestContext } from './__helpers'
import { hashPassword } from '../api/context/cryptoService'
import { WrongCredentialError } from '../api/graphql'

const ctx = createTestContext()

describe('Login', () => {
  const email = 'randomEmail@gmail.com'
  const password = '123456'

  beforeAll(async () => {
    const hashedPassword = await hashPassword(password)
    const user = await ctx.prisma.user.create({ data: { email, password: hashedPassword }})
    if(!user) throw new Error('There is something wrong with mocking user data')
  })

  it('should throw error if email is not existed', async () => {
    const request = await loginRequest('wrongmail@gmail.com', password)

    expect(request.data).toBe(null)
    expect(request.errors?.[0].message).toBe(WrongCredentialError.message)
  })

  it('should throw error if wrong paswword is passed ', async () => {
    const request = await loginRequest(email, 'wrongpassword')

    expect(request.data).toBe(null)
    expect(request.errors?.[0].message).toBe(WrongCredentialError.message)
  })

  it('should return token and user info', async () => {
    const request = await loginRequest(email, password)

    expect(request.data.login).toHaveProperty('token')
    expect(request.data.login).toHaveProperty('user')
    
    expect(request.data.login.user).toHaveProperty('id')
    expect(request.data.login.user.email).toBe(email)
  })
})

export const loginRequest = (email: string, password: string) => {
  return ctx.client.query(`
    mutation {
      login(input: {
        email: "${email}"
        password: "${password}"
      }) {
        token
        user {
          id
          email
        }
      }
    }
  `)
}