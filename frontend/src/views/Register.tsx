import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ENDPOINT } from '../config/constans'
import { useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
  const navigate = useNavigate()
  const [userRegister, setUserRegister] = useState({ name: '', email: '', password: '' })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserRegister({ ...userRegister, [event.target.name]: event.target.value })
  }

  const getData = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()
      const response = await axios.post(ENDPOINT.register, userRegister)
      window.alert('Usuario registrado con éxito 😀.')
      console.log(response.data)
      navigate('/login')
    } catch (error) {
      window.alert(`${error.response.data.message} 🙁.`)
    }
  }
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <Form onSubmit={getData}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
          type="text"
          placeholder="Enter your name"
          value={userRegister.name}
          onChange={handleChange}
          name='name'
           />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          type="email"
          placeholder="Enter email"
          value={userRegister.email}
          onChange={handleChange}
          name='email'
           />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          placeholder="Password"
          value={userRegister.password}
          onChange={handleChange}
          name='password'
          />
        </Form.Group>

        <Button className='mt-3' variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  )
}

export default Register
