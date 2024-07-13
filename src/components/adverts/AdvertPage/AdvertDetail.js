import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { advertPropTypes } from '../propTypes';
import placeholderImage from '../../../assets/images/placeholder.png';

function AdvertDetail({ advert, onDelete }) {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(advert.id);
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  if (!advert) {
    return <p>Cargando...</p>;
  }

  return (
    <Card>
      <Card.Img 
        variant="top" 
        src={advert.photo || placeholderImage} 
        style={{ width: '20%', margin: '0 auto' }}
      />
      <Card.Body>
        <Card.Title>{advert.name || 'Sin nombre'}</Card.Title>
        <Card.Text>Precio: {advert.price ? `${advert.price} €` : 'No disponible'}</Card.Text>
        <Card.Text>Tipo: {advert.sale !== undefined ? (advert.sale ? 'Venta' : 'Compra') : 'No especificado'}</Card.Text>
        <Card.Text>Tags: {advert.tags ? advert.tags.join(', ') : 'Sin tags'}</Card.Text>
        <Button variant="danger" onClick={handleDeleteClick}>
          Eliminar
        </Button>
      </Card.Body>
      <Modal show={showModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas eliminar este anuncio?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

AdvertDetail.propTypes = {
  advert: PropTypes.shape(advertPropTypes).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AdvertDetail;
