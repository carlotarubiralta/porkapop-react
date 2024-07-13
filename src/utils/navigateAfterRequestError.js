export const navigateAfterRequestError = (error, navigate) => {
    if (error.response && error.response.status === 401) {
      navigate('/login');
    } else {
      console.error('Request error:', error);
    }
  };
  