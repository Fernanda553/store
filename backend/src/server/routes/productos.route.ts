import express from 'express'
import * as productos from '../controllers/productos.controller.ts'

const router = express.Router()

router.get('/products', productos.getProducts)

router.post('/newproduct', productos.newProduct)

router.get('/products/:id', productos.getProductById)

export default router
