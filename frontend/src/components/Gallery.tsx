import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'

const Gallery: React.FC = () => {
  return (
    <Container fluid className='p-0' style={{ backgroundColor: '#fff' }}>
      <h2 className="text-center pt-4 m-0">Gallery</h2>
      <Container fluid
      className='vh-100 p-0'>
      <Row className="scroll-container justify-content-center p-0 m-0">
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* Repite este bloque de Card según sea necesario */}
      </Row>
      </Container>
    </Container>
  )
}

export default Gallery
