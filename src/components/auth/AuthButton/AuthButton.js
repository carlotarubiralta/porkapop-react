import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../service';

function AuthButton({ onLogout }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    logout();
    onLogout();
    setShowModal(false);
    navigate('/login');
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button variant="danger" onClick={handleLogoutClick}>
        Logout
      </Button>
      <Modal show={showModal} onHide={handleCancelLogout}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas cerrar sesión?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelLogout}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

AuthButton.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AuthButton;
