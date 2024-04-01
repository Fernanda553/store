import axios from 'axios'
import { useEffect, useState } from 'react'

import { ENDPOINT } from '../config/constans'
import { initialState, type Product, type PropsUseCart } from '../interfaces/interfaces'

export const useCart = (): PropsUseCart => {
  const [user, setUser] = useState<PropsUseCart['user']>({ email: '', password: '' })
  const [product, setProduct] = useState<PropsUseCart['product']>(initialState)
  const [products, setProducts] = useState<PropsUseCart['products']>([])
  const [cart, setCart] = useState<PropsUseCart['cart']>([])
  const [total, setTotal] = useState<PropsUseCart['total']>(0)
  const [isAuthenticated, setIsAuthenticated] = useState<PropsUseCart['isAuthenticated']>(false)
  const [token, setToken] = useState<PropsUseCart['token']>('')

  const login = (jwt: string): void => {
    setIsAuthenticated(true)
    setToken(jwt)
  }

  const logout = (): void => {
    setIsAuthenticated(false)
    setToken('')
  }

  const getProducts = (): void => {
    axios
      .get(ENDPOINT.products)
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.error('Error al obtener data', error)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  const addCart = (product: Product): void => {
    setTotal(+total + +product.price)

    const productInCart = cart.findIndex((item) => item.id === product.id)

    if (productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1

      setCart(newCart)
      return
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  const clearCart = (): void => {
    setCart([])
    setTotal(0)
  }

  const removeFromCart = (product: Product): void => {
    const newCart = cart.flatMap((p) => {
      if (p.id === product.id) {
        setTotal(+total - +product.price)
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

  const addOneMore = (product: Product): void => {
    setTotal(+total + +product.price)
    const productInCart = cart.findIndex((item) => item.id === product.id)

    if (productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1

      return setCart(newCart)
    }
  }

  return {
    user,
    setUser,
    product,
    setProduct,
    isAuthenticated,
    token,
    login,
    logout,
    products,
    setProducts,
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
