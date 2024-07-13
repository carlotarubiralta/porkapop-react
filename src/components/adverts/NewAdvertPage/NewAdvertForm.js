import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import SelectTags from '../SelectTags';
import { createAdvert, getTags } from '../service';

function NewAdvertForm() {
  const [name, setName] = useState('');
  const [sale, setSale] = useState(true);
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [availableTags, setAvailableTags] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const fetchedTags = await getTags();
        setAvailableTags(fetchedTags);
      } catch (error) {
        setError('Error al cargar los tags.');
      }
    };

    fetchTags();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const advertData = {
        name,
        sale,
        price,
        tags,
        photo,
      };

      const createdAdvert = await createAdvert(advertData);
      navigate(`/adverts/${createdAdvert.id}`);
    } catch (error) {
      setError('Error al crear el anuncio.');
    }
  };

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const isFormValid = () => {
    return name && price && tags.length;
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 shadow-sm rounded" style={{ border: '1px solid #ddd' }}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="sale">
        <Form.Label>Tipo</Form.Label>
        <Form.Check
          type="radio"
          label="Venta"
          name="sale"
          checked={sale}
          onChange={() => setSale(true)}
        />
        <Form.Check
          type="radio"
          label="Compra"
          name="sale"
          checked={!sale}
          onChange={() => setSale(false)}
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>
      <SelectTags selectedTags={tags} onChange={setTags} />
      <Form.Group controlId="photo">
        <Form.Label>Foto</Form.Label>
        <Form.Control
          type="file"
          onChange={handleFileChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isFormValid()}>
        Crear Anuncio
      </Button>
    </Form>
  );
}

export default NewAdvertForm;
