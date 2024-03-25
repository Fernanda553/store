import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

interface Product {
  title: string
  description: string
  imgSrc: string
  price: number
}

const OneProduct: React.FC = () => {
  // Simulación de datos del producto
  const product: Product = {
    title: 'Nombre del Producto',
    description: 'Descripción del producto...',
    imgSrc: 'https://via.placeholder.com/150',
    price: 10.99 // Precio del producto
  }

  const handleAddToCart = () => {
    // Lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito')
  }

  return (
    <Container className="mt-5">
    <Card>
      <Card.Body>
        <Row>
          <Col xs={12} lg={7} className="mb-3 mb-lg-0">
            <Image src={product.imgSrc} alt={product.title} fluid />
          </Col>
          <Col xs={12} lg={5}>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Precio: ${product.price}</Card.Text>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to bag  ${product.price}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Container>
  )
}

export default OneProduct
