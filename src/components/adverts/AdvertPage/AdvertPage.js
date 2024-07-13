import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { getAdvert, deleteAdvert } from '../service';
import AdvertDetail from './AdvertDetail';

function AdvertPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const fetchedAdvert = await getAdvert(id);
        if (fetchedAdvert) {
          setAdvert(fetchedAdvert);
        } else {
          navigate('/not-found');
        }
      } catch (error) {
        console.error('Error fetching advert:', error);
        navigate('/not-found');
      }
    };

    fetchAdvert();
  }, [id, navigate]);

  const handleDelete = async (id) => {
    try {
      await deleteAdvert(id);
      navigate('/adverts');
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
