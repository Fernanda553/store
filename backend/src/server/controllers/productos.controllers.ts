import { Request, Response } from 'express'
import HTTP_STATUS from '../../config/constans'
import * as sql from '../models/Productos.dao'
import { Product } from '../../interfaces/products.interfaces'

export interface ProductsResponse extends Response {
  products: Product[]
}

export interface NewProductReq extends Request {
  product: Product
}

// Devolver todos los productos
export const getProducts = (_: Request , res: Response | ProductsResponse): void => {
  sql.getProducts()
    .then((products) => {
      console.log(products)
      products.length > 0
        ? res.status(HTTP_STATUS.ok.code).json(products)
        : res.status(HTTP_STATUS.not_found.code).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text })
    })
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}

// Crear un nuevo producto
export const newProduct = (req: NewProductReq | Request, res: Response) => {
  const { title, img, description, price } = req.body
  console.log(title, img, description, price)
  sql.createProduct(title, img, description, price)
    .then(([product]) => res.status(HTTP_STATUS.created.code).json({ id: product.id, title: product.title, price: product.price }))
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}
