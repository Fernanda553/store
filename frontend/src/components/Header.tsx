import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header style={{ height: '70px' }}>
      <Container fluid className="d-flex justify-content-center align-items-center">
        <h1 className='header'>Store</h1>
      </Container>
    </header>
  )
}

export default Header
