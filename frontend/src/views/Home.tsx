import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Galery from '../components/Galery'

const Home: React.FC = () => {
  return (
    <Container fluid>
      <Header/>
      <Galery/>
      <Footer/>
    </Container>
  )
}

export default Home
