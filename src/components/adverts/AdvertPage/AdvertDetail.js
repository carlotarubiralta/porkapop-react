import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function AdvertDetail({ advert }) {
  return (
    <Card>
      <Card.Img variant="top" src={advert.photo || '/placeholder.png'} />
      <Card.Body>
        <Card.Title>{advert.name}</Card.Title>
        <Card.Text>Precio: {advert.price} €</Card.Text>
        <Card.Text>Tipo: {advert.sale ? 'Venta' : 'Compra'}</Card.Text>
        <Card.Text>Descripción: {advert.description}</Card.Text>
        <Card.Text>Tags: {advert.tags.join(', ')}</Card.Text>
      </Card.Body>
    </Card>
  );
}

AdvertDetail.propTypes = {
  advert: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sale: PropTypes.bool.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    photo: PropTypes.string,
  }).isRequired,
};

export default AdvertDetail;
