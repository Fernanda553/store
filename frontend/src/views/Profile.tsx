import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

interface UserProfile {
  email: string
}

// TODO: crear la funciones que corresponden esta es a modo ejemplo
const Profile: React.FC<UserProfile> = ({ email }) => {
  const handleCreateProduct = () => {
    // Lógica para redirigir a la página de creación de producto
    console.log('Redirigiendo a la página de creación de producto')
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4">Welcome, {email} ✨</h2>
          <p className="text-center mb-4">What are you waiting for? Create a new product now!😄</p>
          <div className="mt-5 d-flex justify-content-center align-items-center">
          <Button className='mx-auto' variant="info" onClick={handleCreateProduct}>
          Create New Product
          </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
