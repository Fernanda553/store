import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import StoreContext from '../context/StoreContext'
import { ENDPOINT } from '../config/constans'
import { useParams } from 'react-router-dom'

const OneProduct: React.FC = () => {
  const { id } = useParams()
  const { addCart, product, setProduct } = useContext(StoreContext)

  const baseUrl = ENDPOINT.products

  const getProduct = (): void => {
    axios
      .get(`${baseUrl}/${id}`)
      .then(response => {
        setProduct(response.data)
      })
      .catch(error => {
        console.error('Error al obtener data', error)
      })
  }

  useEffect(() => {
    getProduct()
  }, [id])

  return (
    <Container className="mt-5">
    <Card>
      <Card.Body>
        <Row>
          <Col xs={12} lg={7} className="mb-3 mb-lg-0">
            <Image src={product.img} alt={product.title} fluid />
          </Col>
          <Col xs={12} lg={5}>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Precio: ${product.price}</Card.Text>
            <Button variant="primary" onClick={() => { addCart(product) }}>
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
