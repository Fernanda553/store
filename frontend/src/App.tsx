import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useCart } from './hooks/useCart'

import { PublicRoute, PrivateRoute } from './routes'
import { OneProduct, Carrito, Home, Login, NewProduct, NotFound, Profile, Register, Thanks } from './views'
import Navigation from './components/Navigation'
import { StoreContext } from './context/StoreContext'

const App = (): JSX.Element => {
  const {
    user,setUser,product,setProduct, isAuthenticated, token, login,
    logout,
    products,
    setProducts,
    total,
    setTotal,
    cart,
    addCart,
    setCart,
    addOneMore,
    clearCart,
    removeFromCart } = useCart()

    const allState = {user,setUser,product,setProduct, isAuthenticated, token, login,
      logout,
      products,
      setProducts,
      total,
      setTotal,
      cart,
      addCart,
      setCart,
      addOneMore,
      clearCart,
      removeFromCart}

  return (
   <StoreContext.Provider value={allState}>
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route
            path='/'
            element={<PublicRoute> <Home /></PublicRoute>}
          />
          <Route
            path='/carrito'
            element={<PublicRoute><Carrito /></PublicRoute>}
          />
          <Route
            path='/login'
            element={<PublicRoute><Login /></PublicRoute>}
          />
          <Route
            path='/register'
            element={<PublicRoute><Register /></PublicRoute>}
          />
          <Route
            path='/products/:id'
            element={<PublicRoute><OneProduct/></PublicRoute>}
          />
          <Route
            path='/newproduct'
            element={<PrivateRoute><NewProduct /></PrivateRoute>}
          />
          <Route
            path='/profile'
            element={<PrivateRoute><Profile /></PrivateRoute>}
          />
      <Route path='/thanks' element={<Thanks/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
   </StoreContext.Provider>
  )
}

export default App
