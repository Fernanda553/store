import React, { useState } from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Cart: React.FC = () => {
  const [quantity, setQuantity] = useState(1)
  const productPrice = 10 // Precio del producto

  // TODO: las funciones son a modo de ejemplo para no perderme, esto tiene que con typeScript

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const totalPrice = quantity * productPrice

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <NavLink to=''>
        <Image src="https://via.placeholder.com/150" alt="Product Image" />
        </NavLink>
        <div className="ml-3">
          <h5>Product Name</h5>
          <p>Price: ${productPrice}</p>
          <div className="d-flex align-items-center">
            <Button variant="outline-primary" onClick={handleDecrement}>-</Button>
            <span className="mx-2">{quantity}</span>
            <Button variant="outline-primary" onClick={handleIncrement}>+</Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <h5>Total: ${totalPrice}</h5>
      </div>
    </Container>
  )
}

export default Cart
