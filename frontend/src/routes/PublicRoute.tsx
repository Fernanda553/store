import React, { useContext } from 'react'
import StoreContext from '../context/StoreContext'
import { Navigate, useLocation } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(StoreContext)
  const { pathname } = useLocation()
  return (
    isAuthenticated && (pathname === '/login' || pathname === '/register' || pathname === '/profile')
      ? <Navigate to='/' />
      : children
  )
}

export default PublicRoute
