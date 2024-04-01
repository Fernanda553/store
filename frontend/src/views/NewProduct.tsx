import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ENDPOINT } from '../config/constans'

const NewProduct: React.FC = () => {
  const [newProduct, setNewProduct] = useState({ title: '', img: '', description: '', price: '' })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value })
  }

  const getData = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()
      const response = await axios.post(ENDPOINT.newproduct, newProduct)
      window.alert('Producto ingresado con éxito 😀.')
      console.log(response.data)
    } catch (error) {
    window.alert(`${error.response.data.message} 🙁.`)
    }
  }
  return (
    <Container className="mt-5 text-info">
      <h2 className="text-center mb-4">New Product</h2>
      <Form onSubmit={getData}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
          type="text" placeholder="Enter title"
          name="title"
          value={newProduct.title}
          onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          name="description"
          value={newProduct.description}
          onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formImg">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
          type="text"
          placeholder="Enter image URL"
          name="img"
          value={newProduct.img}
          onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
          type="text"
          placeholder="Enter price"
           name="price"
          value={newProduct.price}
          onChange={handleChange} />
        </Form.Group>

        <Button className='mt-3' variant="info" type="submit">
        Create ✨
        </Button>
      </Form>
    </Container>
  )
}

export default NewProduct
