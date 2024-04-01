import React, { useContext } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import StoreContext from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Profile: React.FC = () => {
  const { logout, user } = useContext(StoreContext)
  const navigate = useNavigate()

  const logOut = (): void => {
    logout()
  }
  const handleCreateProduct = (): void => {
    navigate('/newproduct')
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4">Welcome, {user.email} ✨</h2>
          <p className="text-center mb-4">What are you waiting for? Create a new product now!😄</p>
          <div className="mt-5 d-flex justify-content-center align-items-center">
          <Button className='mx-auto' variant="info" onClick={handleCreateProduct}>
          Create New Product
          </Button>
          <Button onClick={logOut}>
           Sign out
          </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
