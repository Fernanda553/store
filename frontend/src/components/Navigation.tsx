import React, { useState } from 'react'
import { Nav, Offcanvas } from 'react-bootstrap'

const Navigation: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas)

  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={handleOffcanvasToggle} className="d-lg-none">
          <div className='d-flex justify-content-between align-items-center'>
            <p className='title'>Store</p>
            <i className="fa-solid fa-bars fa-2xl text-white pt-3"></i>
          </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-none d-lg-block">
          <Nav.Link eventKey="link-1" href="/login">
            <i className="fa-solid fa-user p-3"></i>
            Sign In
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-none d-lg-block">
          <Nav.Link eventKey="link-1" href="/">
          <i className="fa-solid fa-shop p-3"></i>
            Shoping
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-none d-lg-block">
          <Nav.Link eventKey="link-2" href="/carrito">
            <i className="fa-solid fa-bag-shopping p-3"></i>
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
          <Nav.Link href="/login" className="d-lg-none">
            <i className="fa-solid fa-user p-3"></i>
              Sign In
            </Nav.Link>
            <Nav.Link href="/" className="d-lg-none">
            <i className="fa-solid fa-shop p-3"></i>
              Shoping
            </Nav.Link>
            <Nav.Link href="/carrito" className="d-lg-none">
            <i className="fa-solid fa-bag-shopping p-3"></i>
              My Bag
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Navigation
