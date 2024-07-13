import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../auth/LoginPage/LoginPage';
import AdvertsPage from '../adverts/AdvertsPage/AdvertsPage';
import AdvertPage from '../adverts/AdvertPage/AdvertPage';
import NewAdvertPage from '../adverts/NewAdvertPage/NewAdvertPage';
import NotFoundPage from './NotFoundPage';
import RequireAuth from '../auth/RequireAuth/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adverts" element={<RequireAuth><AdvertsPage /></RequireAuth>} />
      <Route path="/adverts/:id" element={<RequireAuth><AdvertPage /></RequireAuth>} />
      <Route path="/adverts/new" element={<RequireAuth><NewAdvertPage /></RequireAuth>} />
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
