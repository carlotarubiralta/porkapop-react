import client from '../../api/client';

export const getTags = async () => {
  const response = await client.get('/api/v1/adverts/tags');
  return response.data;
};

export const createAdvert = async (advertData) => {
  const formData = new FormData();
  formData.append('name', advertData.name);
  formData.append('sale', advertData.sale);
  formData.append('price', advertData.price);
  formData.append('tags', advertData.tags.join(','));
  if (advertData.photo) {
    formData.append('photo', advertData.photo);
  }

  const response = await client.post('/api/v1/adverts', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getAdverts = async () => {
  const response = await client.get('/api/v1/adverts');
  return response.data;
};

export const getAdvert = async (id) => {
  const response = await client.get(`/api/v1/adverts/${id}`);
  return response.data;
};

export const deleteAdvert = async (id) => {
  const response = await client.delete(`/api/v1/adverts/${id}`);
  return response.data;
};
