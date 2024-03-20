import { Navigate, useLocation } from 'react-router-dom'
import StoreContext from '../context/StoreContext'
import { useContext } from 'react'

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(StoreContext)
  const { pathname } = useLocation()
  return (
    isAuthenticated && pathname !== '/login' && pathname !== '/register'
      ? children
      : <Navigate to='/' />
  )
}

export default PrivateRoute
