import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoreContext from './context/StoreContext'
import { useCart } from './hooks/useCart'

import { PublicRoute, PrivateRoute } from './routes'
import { OneProduct, Carrito, Home, Login, NewProduct, NotFound, Profile, Register, Thanks } from './views'

const App = (): JSX.Element => {
  const allState = useCart()

  return (
   <StoreContext.Provider value={allState}>
    <BrowserRouter>
    <Routes>
    <Route
            path='/'
            element={<PublicRoute> <Home /></PublicRoute>}
          />
          <Route
            path='/carrito'
            element={<PrivateRoute><Carrito /></PrivateRoute>}
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
            path='/oneproduct/:id'
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
