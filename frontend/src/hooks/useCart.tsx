import axios from 'axios'
import { useEffect, useState } from 'react'

import { ENDPOINT } from '../config/constans'
import { type Product, type PropsUseCart } from '../interfaces/interfaces'

const allMocks = [
  {
    id: 'asdasdas.asdasd.asdas',
    title: 'Vestido de princesa',
    price: '200',
    description: 'esta es la descripcion',
    img: 'https://ae01.alicdn.com/kf/H914957c16b5e4e7eb5e7dd149385ddecb/Ropa-bonita-para-gato-vestido-c-lido-y-agradable-a-la-piel-para-Oto-o-e.jpg'
  },
  {
    id: 'asdasdas.asdasd.jjjjj',
    title: 'Traje de principe',
    price: '190',
    description: 'esta es la descripcion',
    img: 'https://m.media-amazon.com/images/I/71RcUCvadhL.jpg'
  },
  {
    id: 'asdasdas.asdasd.aaaaa',
    title: 'Disfraz de abeja',
    price: '190',
    description: 'esta es la descripcion',
    img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/5fac673316782c9121c351332429ae63.jpg?imageView2/2/w/500/q/60/format/webp'
  }
]

export const useCart = (): PropsUseCart => {
  const [user, setUser] = useState<PropsUseCart['user']>({ email: '', password: '' })
  const [productos, setProductos] = useState<PropsUseCart['productos']>([])
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
        setProductos(response.data)
      })
      .catch(error => {
        console.error('Error al obtener data', error)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  const addCart = (producto: Product): void => {
    setTotal(+total + +producto.price)

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
    setTotal(0)
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

  const addOneMore = (producto: Product): void => {
    setTotal(+total + +producto.price)
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
