import express, { Request, Response } from 'express'
import * as productos from '../controllers/productos.controllers'

const router = express.Router()

router.get('/products', (req: Request, res: Response) => {
    productos.getProducts(req, res)
})

export default router
