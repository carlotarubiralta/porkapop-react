import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../auth/LoginPage/LoginPage';
import AdvertsPage from '../adverts/AdvertsPage/AdvertsPage';
import AdvertPage from '../adverts/AdvertPage/AdvertPage';
import NewAdvertPage from '../adverts/NewAdvertPage/NewAdvertPage';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adverts" element={<AdvertsPage />} />
      <Route path="/adverts/:id" element={<AdvertPage />} />
      <Route path="/adverts/new" element={<NewAdvertPage />} />
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
