import { createContext } from 'react'
import { type PropsUseCart } from '../interfaces/interfaces'

const StoreContext = createContext<PropsUseCart>({} as any)

export default StoreContext
