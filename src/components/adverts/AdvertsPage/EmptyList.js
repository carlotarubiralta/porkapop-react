import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EmptyList() {
  return (
    <div>
      <p>No hay anuncios disponibles.</p>
      <Button as={Link} to="/adverts/new" variant="primary">
        Crear Anuncio
      </Button>
    </div>
  );
}

export default EmptyList;
