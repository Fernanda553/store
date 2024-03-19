import { useEffect, useState } from 'react'

import { ENDPOINT } from '../config/constans'
import { type Cart, type Product, type PropsUseCart } from '../interfaces/interfaces'
export interface ApiResponse {
  code: number
  message: string
}

export const useCart = (): PropsUseCart => {
  const [user, setUser] = useState<{ email: string, password: string }>({ email: '', password: '' })
  const [productos, setProductos] = useState<Product[]>([])
  const [cart, setCart] = useState<Cart[]>([])
  const [total, setTotal] = useState<string>('0')
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [token, setToken] = useState<string>('')

  const login = (jwt: string): void => {
    setIsAuthenticated(true)
    setToken(jwt)
  }

  const logout = (): void => {
    setIsAuthenticated(false)
    setToken('')
  }

  const getProducts = async () => {
    try {
      const response = await fetch(ENDPOINT.products)
      const products = await response.json()
      if (products?.code) {
        throw new Error(products.message)
      }
      setProductos(products)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const addCart = (producto: Product) => {
    setTotal(+total + +producto.precio)

    const productoInCart = cart.findIndex((item) => item.id === producto.id)

    if (productoInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productoInCart].quantity += 1

      return setCart(newCart)
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...producto,
        quantity: 1
      }
    ])
  }

  const clearCart = (): void => {
    setCart([])
    setTotal('0')
  }

  const removeFromCart = (producto: Product): void => {
    const newCart = cart.flatMap((p) => {
      if (p.id === producto.id) {
        setTotal(+total - +producto.precio)
        if (p.quantity > 1) {
          p.quantity -= 1
          return p
        }
        return []
      }
      return p
    })
    setCart(newCart)
  }

  const addOneMore = (producto: Product): any => {
    setTotal(+total + +producto.precio)
    const productoInCart = cart.findIndex((item) => item.id === producto.id)

    if (productoInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productoInCart].quantity += 1

      return setCart(newCart)
    }
  }

  return {
    user,
    setUser,
    isAuthenticated,
    token,
    login,
    logout,
    getProducts,
    productos,
    setProductos,
    total,
    setTotal,
    cart,
    addCart,
    setCart,
    addOneMore,
    clearCart,
    removeFromCart
  }
}
