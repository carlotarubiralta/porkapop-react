import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { advertPropTypes } from '../propTypes';

function AdvertsList({ adverts }) {
  if (adverts.length === 0) {
    return <p>No hay anuncios disponibles</p>;
  }

  return (
    <Row>
      {adverts.map((advert) => (
        <Col key={advert.id} md={4} style={{ marginBottom: '10px' }}>
          <Card>
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
        </Col>
      ))}
    </Row>
  );
}

AdvertsList.propTypes = {
  adverts: PropTypes.arrayOf(PropTypes.shape(advertPropTypes)).isRequired,
};

export default AdvertsList;
