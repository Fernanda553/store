import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Register: React.FC = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className='mt-3' variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  )
}

export default Register
