import * as sql from '../models/Usuarios.dao'
import HTTP_STATUS from '../../config/constans'
// import { jwtSign } from '../../utils/jwt'
import { encrypt } from '../../utils/cryps'
import { Request, Response } from 'express'
import { User } from '../../interfaces/user.interfaces'

interface UserRegister extends Request{
    user: User
}

// registrar un usuario
export const register = (req: UserRegister | Request, res: Response) => {
  const { name, email, password } = req.body
  console.log(name, email, password)
  const passEncrypted = encrypt(password)
  sql.createUser(name, email, passEncrypted)
    .then(([user]) => res.status(HTTP_STATUS.created.code).json({ id: user.id, email: user.email }))
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}