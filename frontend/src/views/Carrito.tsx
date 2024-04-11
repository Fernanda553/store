import React, { useContext } from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import StoreContext from '../context/StoreContext'

const Cart: React.FC = () => {
  const {
    addOneMore,
    cart,
    clearCart,
    total,
    removeFromCart
  } = useContext(StoreContext)
  const navigate = useNavigate()
  console.log(cart)

  const goToProduct = (id: string): void => {
    navigate(`/products/${id}`)
  }
  const handlerCart = (): void => {
    navigate('/thanks')
    clearCart()
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🛍</h2>
      {cart?.map((product) => {
        return (
          <div key={product?.id} className="d-flex align-items-center justify-content-center mb-3">
        <Image src={product?.img} alt="Product Image" onClick={() => { goToProduct(product?.id) }} />
        <div className="ml-3">
          <h5>{product?.title}</h5>
          <p>Price: ${product?.price}</p>
          <div className="d-flex align-items-center">
            <Button variant="outline-primary" onClick={() => { addOneMore(product) }}>-</Button>
            <span className="mx-2">{product?.quantity * product?.price}</span>
            <Button variant="outline-primary" onClick={() => { removeFromCart(product) }}>+</Button>
          </div>
        </div>
      </div>
        )
      })}
      <hr />
      <div className="text-center">
        <h5>Total: ${total}</h5>
      </div>
      <Button variant="ligth" onClick={handlerCart}> Pay</Button>
    </Container>
  )
}

export default Cart
