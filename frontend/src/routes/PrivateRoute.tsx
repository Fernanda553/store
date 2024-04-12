import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import StoreContext from '../context/StoreContext'

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useContext(StoreContext)
  const { pathname } = useLocation()
  return (
    isAuthenticated && pathname !== '/login' && pathname !== '/register'
      ? children
      : <Navigate to='/' />
  )
}

export default PrivateRoute
