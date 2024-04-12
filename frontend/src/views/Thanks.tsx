import React, { useContext } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import StoreContext from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

interface User {
  email: string
}

const Thanks: React.FC<User> = () => {
  const { user } = useContext(StoreContext)
  const navigate = useNavigate()
  const handleExploreProducts = (): void => {
    navigate('/')
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h2 className="mb-4">Thank You, {user.email}!</h2>
          <h3 className='text-success'>Your payment has been successfully processed.</h3>
          <p>Explore more products in our store! 💫</p>
          <Button variant="info" onClick={handleExploreProducts} className="mt-3">
            Explore Products 🚀
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Thanks
