import { createContext } from 'react'
import { type PropsUseCart } from '../interfaces/interfaces'

const StoreContext = createContext<PropsUseCart | undefined>(undefined)

export default StoreContext
