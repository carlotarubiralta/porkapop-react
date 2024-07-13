import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import client from '../../../api/client';
import LoginForm from './LoginForm';
import { setToken } from '../../../utils/storage';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await client.post('/api/auth/login', { email, password });
      const token = response.data.accessToken; // Ajustado para usar accessToken

      if (token) {
        setToken(token);
        navigate('/adverts');
      } else {
        throw new Error('Token no encontrado en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Inicio de sesión fallido:', error);
      alert('Inicio de sesión fallido. Por favor, verifica tus credenciales.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4">
          <h2>Iniciar Sesión</h2>
          <LoginForm onSubmit={handleLogin} />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
