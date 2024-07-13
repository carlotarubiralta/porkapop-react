import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AdvertsPage from '../adverts/AdvertsPage';
import AdvertPage from '../adverts/AdvertPage';
import NewAdvertPage from '../adverts/NewAdvertPage';
import LoginPage from '../auth/LoginPage';
import NotFoundPage from './NotFoundPage';
import RequireAuth from '../auth/RequireAuth';
import { AuthProvider } from '../auth/context';
import Layout from '../layout/Layout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<RequireAuth><AdvertsPage /></RequireAuth>} />
            <Route path="/adverts" element={<RequireAuth><AdvertsPage /></RequireAuth>} />
            <Route path="/adverts/new" element={<RequireAuth><NewAdvertPage /></RequireAuth>} />
            <Route path="/adverts/:id" element={<RequireAuth><AdvertPage /></RequireAuth>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
