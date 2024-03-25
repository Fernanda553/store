import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

interface User {
  email: string
}

// TODO: CREAR LA FUNCION PARA LLAMAR AL USUARIO
const Thanks: React.FC<User> = ({ email }) => {
  const handleExploreProducts = () => {
    // Lógica para redirigir a la página de exploración de productos
    console.log('Redirigiendo a la página de exploración de productos')
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h2 className="mb-4">Thank You, {email}!</h2>
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
