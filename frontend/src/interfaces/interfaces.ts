export interface User {
  email: string
  password: string
}

export interface Product {
  id: string
  img: string
  titulo: string
  precio: string
}

export interface Cart extends Product {
  quantity: number
}
export interface PropsUseCart {
  user: User
  productos: Product[]
  isAuthenticated: boolean
  token: string
  cart: Cart[]
  total: number
  login: (jwt: string) => void
  logout: () => void
  addCart: (producto: Product) => void
  clearCart: () => void
  removeFromCart: (producto: Product) => void
  addOneMore: (producto: Product) => void
}
