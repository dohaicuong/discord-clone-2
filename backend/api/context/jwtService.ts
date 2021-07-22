import jwt from 'jsonwebtoken'

const {
  JWT_SECRET = 'mikumikumasumasukawaii'
} = process.env

export type TokenPayload = {
  sub: string
}

export const signToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, JWT_SECRET)
}

export const verifyToken = (token: string): Promise<TokenPayload> => {
  return new Promise((resolve, reject) => {
    try {
      const payload = jwt.verify(token, JWT_SECRET) as TokenPayload
      resolve(payload)
    }
    catch(err) {
      reject(err)
    }
  })
}
