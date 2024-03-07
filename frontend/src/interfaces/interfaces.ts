export interface Product {
  id: string
  img: string
  titulo: string
  precio: string
}

export interface PropsUseCart {
  login: () => void
  logout: () => void
  getProducts: () => void
  addCart: () => void
  clearCart: () => void
  removeFromCart: () => void
  addOneMore: () => void
}
