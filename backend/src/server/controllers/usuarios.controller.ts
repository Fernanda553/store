import * as sql from '../models/Usuarios.dao'
import HTTP_STATUS from '../../config/constans'
import { jwtSign } from '../../utils/jwt'
import { encrypt, compare } from '../../utils/cryps'
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

// recibir credenciales y devolver un token
export const login = async (req: UserRegister | Request, res: Response) => {
  const { email, password } = req.body
  const response = await sql.verifyUser(email)
  if (!response.length) return res.status(HTTP_STATUS.not_found.code).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text })
  const [{ password: pass }] = response
  compare(password, pass)
    .then((userValid) => {
      userValid
        ? res.status(HTTP_STATUS.ok.code).json({ token: jwtSign({ email: req.body.email }) })
        : res.status(HTTP_STATUS.not_found.code).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text })
    })
    .catch((error) => res.status(500).json(error))
}

// devolver los datos de un usuario
export const returnUser = (req: UserRegister | Request, res: Response) => {
  sql.getUser(req.body.email)
    .then(([user]) => {
      user.length > 0
        ? res.status(HTTP_STATUS.ok.code).json({ token: jwtSign({ email: req.body.email }) })
        : res.status(HTTP_STATUS.not_found.code).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text })
    })
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}