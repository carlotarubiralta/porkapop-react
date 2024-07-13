import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { getAdvert, deleteAdvert } from '../service';
import AdvertDetail from './AdvertDetail';

function AdvertPage() {
  const { id } = useParams();
  const history = useNavigate();
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const fetchedAdvert = await getAdvert(id);
        setAdvert(fetchedAdvert);
      } catch (error) {
        console.error('Error fetching advert:', error);
        history.push('/not-found');
      }
    };

    fetchAdvert();
  }, [id, history]);

  const handleDelete = async (id) => {
    try {
      await deleteAdvert(id);
      history.push('/adverts');
    } catch (error) {
      console.error('Error deleting advert:', error);
    }
  };

  return (
    <Container>
      {advert ? <AdvertDetail advert={advert} onDelete={handleDelete} /> : <p>Cargando...</p>}
    </Container>
  );
}

export default AdvertPage;
