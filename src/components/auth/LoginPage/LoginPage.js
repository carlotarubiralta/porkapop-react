import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import client from '../../../api/client';
import LoginForm from './LoginForm';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async ({ email, password, rememberMe }) => {
    try {
      const response = await client.post('/api/auth/login', { email, password });
      const { token } = response.data;

      localStorage.setItem('token', token); // Guardar el token siempre en localStorage

      navigate('/adverts');
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
