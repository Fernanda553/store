import React, { useState } from 'react'
import { Image, Nav, Offcanvas } from 'react-bootstrap'
import logo from '../assets/img/logo.png'

const Navigation = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas)

  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link className="d-lg-none">
            <div className='d-flex'>
              <Image src={logo} alt='icono' roundedCircle className='py-3 mx-4' style={{ width: '80px' }} />
              <h2 className='p-4'>Store</h2>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleOffcanvasToggle} className="d-lg-none">
            <i className="fa-solid fa-bars fa-2xl text-white pt-3" onClick={handleOffcanvasToggle}></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-none d-lg-block">
          <Nav.Link href="/" className="d-none d-lg-block">
            <div className='d-flex'>
              <Image src={logo} alt='icono' roundedCircle className='py-3 mx-4' style={{ width: '80px' }} />
              <h2 className='p-4'>Store</h2>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-none d-lg-block">
          <Nav.Link eventKey="link-1" href="/login">
            <i className="fa-solid fa-user p-3 py-5"></i>
            Sign In
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-none d-lg-block">
          <Nav.Link eventKey="link-2" href="/carrito">
            <i className="fa-solid fa-bag-shopping p-3 py-5"></i>
            My Bag
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-white'>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/" className="d-lg-none">Home</Nav.Link>
            <Nav.Link href="/login" className="d-lg-none">Sign In</Nav.Link>
            <Nav.Link href="/carrito" className="d-lg-none">My Bag</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Navigation
