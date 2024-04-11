 import { User } from '../../interfaces/user.interfaces'
import { jwtVerify } from '../../utils/jwt'
import { Request, Response, NextFunction } from 'express'

export  interface AuthenticatedRequest extends Request {
  user?: User
}

export const verifyToken = (req: AuthenticatedRequest | Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization
  if (!authorizationHeader) {
    return res.status(401).json({
      code: 401,
      message: 'Token no proporcionado'
    })
  }
  const[ bearer, token ] = authorizationHeader.split(' ')
  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({
      code: 401,
      message: 'Formato del token inválido.'
    })
  }
  try {
    jwtVerify(token) && next()
  } catch (error) {
    return res.status(401).json({
      code: 401,
      message: 'Token inválido'
    })
  }
}

export default verifyToken