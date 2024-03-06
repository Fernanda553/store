import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StoreContext from './context/StoreContext'

const App = (): JSX.Element => {
  const allState = {}
  return (
   <StoreContext.Provider value={allState}>
     <BrowserRouter>
    <Routes>
      <Route path='/thanks' element={<h2>gracias</h2>} />
      <Route path='*' element={<h1>not found</h1>} />
    </Routes>
  </BrowserRouter>
   </StoreContext.Provider>
  )
}

export default App
