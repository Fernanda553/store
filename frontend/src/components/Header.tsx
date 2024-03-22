import React from 'react'
import { Container } from 'react-bootstrap'

const Header: React.FC = () => {
  return (
    <header style={{ width: '100%', height: '100px', backgroundColor: '#f8f9fa' }}>
      <Container fluid className="d-flex justify-content-center align-items-center">
        <h1 className='header'>Store</h1>
      </Container>
    </header>
  )
}

export default Header
