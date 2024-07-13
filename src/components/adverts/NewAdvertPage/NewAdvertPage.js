import React from 'react';
import { Container } from 'react-bootstrap';
import NewAdvertForm from './NewAdvertForm';

function NewAdvertPage() {
  return (
    <Container>
      <h2>Crear Nuevo Anuncio</h2>
      <NewAdvertForm />
    </Container>
  );
}

export default NewAdvertPage;
