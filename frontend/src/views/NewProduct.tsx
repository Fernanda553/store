import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

// TODO: las funciones son a modo de ejemplo para no perderme, esto tiene que con typeScript

const NewProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    img: '',
    price: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí puedes enviar formData a tu backend para procesarlo
    console.log(formData)
    // Limpia el formulario después de enviar
    setFormData({
      title: '',
      description: '',
      img: '',
      price: ''
    })
  }

  return (
    <Container className="mt-5 text-info">
      <h2 className="text-center mb-4">New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="title" value={formData.title} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter description" name="description" value={formData.description} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formImg">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Enter image URL" name="img" value={formData.img} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter price" name="price" value={formData.price} onChange={handleChange} />
        </Form.Group>

        <Button className='mt-3' variant="info" type="submit">
        Create ✨
        </Button>
      </Form>
    </Container>
  )
}

export default NewProduct
