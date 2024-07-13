import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AdvertsPage from '../adverts/AdvertsPage';
import AdvertPage from '../adverts/AdvertPage';
import NewAdvertPage from '../adverts/NewAdvertPage';
import LoginPage from '../auth/LoginPage';
import NotFoundPage from './NotFoundPage';
import RequireAuth from '../auth/RequireAuth';
import AuthButton from '../auth/AuthButton';
import { AuthProvider } from '../auth/context';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/adverts">Nodepop</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/adverts">Anuncios</Nav.Link>
              <Nav.Link as={Link} to="/adverts/new">Crear Anuncio</Nav.Link>
            </Nav>
            <Nav>
              <AuthButton onLogout={() => {}} />
            </Nav>
          </Container>
        </Navbar>
        <Container className="mt-3">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<RequireAuth><AdvertsPage /></RequireAuth>} />
            <Route path="/adverts" element={<RequireAuth><AdvertsPage /></RequireAuth>} />
            <Route path="/adverts/new" element={<RequireAuth><NewAdvertPage /></RequireAuth>} />
            <Route path="/adverts/:id" element={<RequireAuth><AdvertPage /></RequireAuth>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
