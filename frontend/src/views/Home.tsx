import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

const Home: React.FC = () => {
  return (
    <Container fluid className='p-0'>
      <Header/>
      <Gallery/>
      <Footer/>
    </Container>
  )
}

export default Home
