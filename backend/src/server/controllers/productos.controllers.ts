import { Request, Response } from 'express'
import HTTP_STATUS from '../../config/constans.js'
import * as sql from '../models/Productos.dao.js'
import { Product } from '../../interfaces/products.interfaces.js'


export interface ProductsResponse extends Response {
  products: Product[]
}

// Devolver todos los productos
export const getProducts = (_: Request , res: ProductsResponse): void => {
  sql.getProducts()
    .then((products: Product[]) => {
      console.log(products)
      products.length > 0
        ? res.status(HTTP_STATUS.ok.code).json(products)
        : res.status(HTTP_STATUS.not_found.code).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text })
    })
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}
