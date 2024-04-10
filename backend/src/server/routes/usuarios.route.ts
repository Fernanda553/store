import express, { Request, Response } from 'express'
import * as usuarios from '../controllers/usuarios.controller'
import verifyToken from '../middlewares/usuarios.middleware'

const router = express.Router()

router.post('/register', (req: Request, res: Response) => {
    usuarios.register(req, res)
})

router.post('/login', (req: Request, res: Response) => {
    usuarios.login(req, res)
})

router.get('/profile', verifyToken, (req: Request, res: Response) => {
    usuarios.returnUser(req, res)
})

export default usuarios