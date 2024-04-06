// import { jwtVerify } from '../../utils/jwt.js'
import { Request, Response, NextFunction } from 'express'
import { AuthenticatedRequest } from '../../interfaces/user.interfaces'


export const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization
  if (!authorizationHeader) {
    return res.status(401).json({
      code: 401,
      message: 'Token no proporcionado'
    })
  }
  const { bearer, token } = authorizationHeader.split(' ')
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