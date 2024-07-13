import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <Container className="content">
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
