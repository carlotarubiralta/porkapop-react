import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AuthButton from '../auth/AuthButton';
import logo from '../../assets/images/logo.png'; // Asegúrate de tener un logo en esta ruta
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/adverts">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/adverts">Anuncios</Nav.Link>
            <Nav.Link as={Link} to="/adverts/new">Crear Anuncio</Nav.Link>
            <AuthButton onLogout={() => {}} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
