import axios from 'axios'
import React, { useContext } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import StoreContext from '../context/StoreContext'
import { ENDPOINT } from '../config/constans'

export interface Data {
  token: string
}

const Login: React.FC = () => {
  const { login, user, setUser } = useContext(StoreContext)
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const getData = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    axios.post(ENDPOINT.login, user)
      .then(({ data }) => {
        const dataToken = data as Data
        if (dataToken.token !== '') { login(dataToken.token) }
        navigate('/')
      })
      .catch((error) => {
        window.alert(`${error.response.data.message} 🙁.`)
      })
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Sign In 🚀</h2>
      <Form onSubmit={getData}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          type="email"
          placeholder="Enter email"
          value={user.email}
          onChange={handleChange}
          name='email'
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          name='password'
           />
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
