import { UserExistedError } from '../api/graphql'
import { createTestContext } from './__helpers'

const ctx = createTestContext()

describe('Signup', () => {
  it('should throw error if email is existed', async () => {
    // mock data
    const email = 'random@gmail.com'
    const password = '123456'
    await ctx.prisma.user.create({ data: { email, password: '123' } })
    
    const request = await signupRequest(email, password)

    expect(request.data).toBe(null)
    expect(request.errors?.[0].message).toBe(UserExistedError.message)
  })

  it('should return token and user', async () => {
    const email = 'random2@gmail.com'
    const request = await signupRequest(email, '123456')

    expect(request.data.signup).toHaveProperty('token')
    expect(request.data.signup).toHaveProperty('user')
    
    expect(request.data.signup.user).toHaveProperty('id')
    expect(request.data.signup.user.email).toBe(email)
  })
})

const signupRequest = (email: string, password: string) => {
  return ctx.client.query(`
    mutation {
      signup(input: {
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