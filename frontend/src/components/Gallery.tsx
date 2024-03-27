import React, { useContext } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import StoreContext from '../context/StoreContext'

const Gallery: React.FC = () => {
  const { addCart, products } = useContext(StoreContext)
  const navigate = useNavigate()

  const handlerClick = (id: string): void => {
    navigate(`products/${id}`)
  }
  return (
    <Container fluid className='p-0' style={{ backgroundColor: '#fff' }}>
    <h2 className="text-center pt-4 m-0">Gallery</h2>
    <Container fluid className='vh-100 p-0'>
      <Row className="scroll-container justify-content-center p-0 m-0">
        {products.map((producto) => {
          return (
            <Card key={producto?.id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={producto?.img} />
              <Card.Body>
                <Card.Title>{producto?.title}</Card.Title>
                <Card.Text>
                  {producto.description}
                </Card.Text>
                <Button
                  className='m-2'
                  variant='outline-primary'
                  onClick={() => { handlerClick(producto.id) }}
                >
                  Ver más 👀
                </Button>
                <Button
                  className='m-2'
                  variant='outline-danger'
                  onClick={() => { addCart(producto) }}
                >
                  Añadir 🛒
                </Button>
              </Card.Body>
            </Card>
          )
        })}
      </Row>
    </Container>
  </Container>
  )
}

export default Gallery
