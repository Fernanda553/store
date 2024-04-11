import 'dotenv/config'
import genericSqlQuery from '../databases/db'
import { Product } from '../../interfaces/products.interfaces'

// Obtener todos los productos
export const getProducts = async (): Promise<Product[]> => {
  return await genericSqlQuery('SELECT * FROM productos;')
}

// Crear un nuevo producto
export const createProduct = async (title: string, img: string, description: string, price: number) => {
  return await genericSqlQuery('INSERT INTO productos (titulo, img, descripcion, precio) VALUES ($1, $2, $3, $4) RETURNING *;', [title, img, description, price])
}

// Obtener un producto por su ID
export const getProductById = async (id: string) => {
  const query = 'SELECT * FROM productos WHERE id = $1;'
  return await genericSqlQuery(query, [id])
}