import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import client from '../../../api/client';

function NewAdvertForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [sale, setSale] = useState(true);
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [availableTags, setAvailableTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await client.get('/api/v1/adverts/tags');
        setAvailableTags(response.data);
      } catch (error) {
        console.error('Error al obtener los tags:', error);
      }
    };

    fetchTags();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const advertData = { name, sale, price, tags, photo };
    onSubmit(advertData);
  };

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre del anuncio"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="sale">
        <Form.Label>Tipo</Form.Label>
        <Form.Control
          as="select"
          value={sale}
          onChange={(e) => setSale(e.target.value === 'true')}
          required
        >
          <option value="true">Venta</option>
          <option value="false">Compra</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="Precio del anuncio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="tags">
        <Form.Label>Tags</Form.Label>
        <Form.Control
          as="select"
          multiple
          value={tags}
          onChange={(e) => setTags([...e.target.selectedOptions].map(o => o.value))}
          required
        >
          {availableTags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="photo">
        <Form.Label>Foto</Form.Label>
        <Form.Control
          type="file"
          onChange={handleFileChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear Anuncio
      </Button>
    </Form>
  );
}

NewAdvertForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewAdvertForm;
