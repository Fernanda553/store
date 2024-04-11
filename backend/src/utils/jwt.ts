import 'dotenv/config'
import jwt from 'jsonwebtoken'

const KEY: string | undefined = process.env.JWT_SECRET_KEY

export const jwtVerify = (token: any) => {
    if (!KEY) {
    throw new Error('JWT secret key is undefined');
  }
  return jwt.verify(token, KEY)
}

export const jwtSign = (payload: any) => {
    if (!KEY) {
        throw new Error('JWT secret key is undefined');
      }
      return jwt.sign(payload, KEY, { expiresIn: 60 * 5 })}