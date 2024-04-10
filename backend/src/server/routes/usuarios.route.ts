import express, { Request, Response } from 'express'
import * as usuarios from '../controllers/usuarios.controller'

const router = express.Router()

router.post('/register', (req: Request, res: Response) => {
    usuarios.register(req, res)
})

export default usuarios