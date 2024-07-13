export const setToken = (token) => {
  if (token) {
    localStorage.setItem('auth', token);
  }
};

export const getToken = () => {
  return localStorage.getItem('auth');
};

export const removeToken = () => {
  localStorage.removeItem('auth');
};
