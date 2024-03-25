import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h2 className="mb-4">404 - Page Not Found</h2>
          <p className="mb-4">The page you requested does not exist.</p>
          <NavLink to='/'>
          <Button variant="secondary">
            Go to Home 😎
          </Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
