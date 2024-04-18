import { createContext } from 'react'
import { type PropsUseCart } from '../interfaces/interfaces'

export const StoreContext = createContext<PropsUseCart>({} as any)
