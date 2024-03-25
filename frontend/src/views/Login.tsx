import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Login: React.FC = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Sign In 🚀</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className='mt-3' variant="primary" type="submit" >
          Login
        </Button>
      </Form>
      <p className="text-center mt-3">¿Dont have an account yet?
      <br/>
       <NavLink to='/register'> Create account 😄</NavLink></p>
    </Container>
  )
}

export default Login
