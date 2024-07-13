import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { advertPropTypes } from '../propTypes';

function AdvertDetail({ advert, onDelete }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{advert.name}</Card.Title>
        <Card.Text>Precio: {advert.price} €</Card.Text>
        <Card.Text>Tipo: {advert.sale ? 'Venta' : 'Compra'}</Card.Text>
        <Card.Text>Tags: {advert.tags.join(', ')}</Card.Text>
        <Button variant="danger" onClick={() => onDelete(advert.id)}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

AdvertDetail.propTypes = {
  advert: PropTypes.shape(advertPropTypes).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AdvertDetail;
