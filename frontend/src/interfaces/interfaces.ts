export interface User {
  email: string
  password: string
}

export interface Product {
  id: string
  img: string
  title: string
  price: string
  description: string
}

export interface Cart extends Product {
  quantity: number
}
export interface PropsUseCart {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  productos: Product[]
  setProductos: React.Dispatch<React.SetStateAction<Product[]>>
  isAuthenticated: boolean
  token: string
  cart: Cart[]
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  login: (jwt: string) => void
  logout: () => void
  addCart: (producto: Product) => void
  clearCart: () => void
  removeFromCart: (producto: Product) => void
  addOneMore: (producto: Product) => void
}
