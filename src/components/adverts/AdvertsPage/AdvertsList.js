import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AdvertsList({ adverts }) {
  if (adverts.length === 0) {
    return <p>No hay anuncios disponibles</p>;
  }

  return (
    <div>
      {adverts.map((advert) => (
        <Card key={advert.id} style={{ marginBottom: '10px' }}>
          <Card.Body>
            <Card.Title>{advert.name}</Card.Title>
            <Card.Text>Precio: {advert.price} €</Card.Text>
            <Card.Text>Tipo: {advert.sale ? 'Venta' : 'Compra'}</Card.Text>
            <Card.Text>Tags: {advert.tags.join(', ')}</Card.Text>
            <Button as={Link} to={`/adverts/${advert.id}`} variant="primary">
              Ver Detalles
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

AdvertsList.propTypes = {
  adverts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      sale: PropTypes.bool.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default AdvertsList;
