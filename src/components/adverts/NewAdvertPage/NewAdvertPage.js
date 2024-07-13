import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import client from '../../../api/client';
import NewAdvertForm from './NewAdvertForm';

function NewAdvertPage() {
  const navigate = useNavigate();

  const handleCreateAdvert = async (advertData) => {
    try {
      const response = await client.post('/api/v1/adverts', advertData);
      const newAdvert = response.data;
      navigate(`/adverts/${newAdvert.id}`);
    } catch (error) {
      console.error('Error al crear el anuncio:', error);
      alert('No se pudo crear el anuncio. Por favor, intente de nuevo.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Crear Anuncio</h2>
          <NewAdvertForm onSubmit={handleCreateAdvert} />
        </Col>
      </Row>
    </Container>
  );
}

export default NewAdvertPage;
