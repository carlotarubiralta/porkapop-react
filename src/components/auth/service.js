import client from '../../api/client';

export const login = (credentials) => {
  return client.post('/api/auth/login', credentials).then(response => response.data);
};

export const signup = (userData) => {
  return client.post('/api/auth/signup', userData).then(response => response.data);
};

export const getUser = () => {
  return client.get('/api/auth/me').then(response => response.data);
};

export const logout = () => {
  localStorage.removeItem('auth');
};
