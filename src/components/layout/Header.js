import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import AuthButton from '../auth/AuthButton';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Navbar.Brand as={Link} to="/adverts">Nodepop</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/adverts">Anuncios</Nav.Link>
        <Nav.Link as={Link} to="/adverts/new">Crear Anuncio</Nav.Link>
      </Nav>
      <Nav>
        <AuthButton onLogout={() => {}} />
      </Nav>
    </Navbar>
  );
}

export default Header;
