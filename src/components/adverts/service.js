import client from '../../api/client';

export const getAdverts = () => {
  return client.get('/api/v1/adverts').then(response => response.data);
};

export const getAdvert = (id) => {
  return client.get(`/api/v1/adverts/${id}`).then(response => response.data);
};

export const createAdvert = (advert) => {
  return client.post('/api/v1/adverts', advert).then(response => response.data);
};

export const deleteAdvert = (id) => {
  return client.delete(`/api/v1/adverts/${id}`).then(response => response.data);
};
