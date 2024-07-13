import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from '../../../utils/storage';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
