import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import client from '../../../api/client';
import AdvertDetail from './AdvertDetail';
import { removeToken } from '../../../utils/storage';

function AdvertPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [advert, setAdvert] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const response = await client.get(`/api/v1/adverts/${id}`);
        setAdvert(response.data);
      } catch (error) {
        setError('No se pudo obtener el anuncio.');
        console.error('Error al obtener el anuncio:', error);
      }
    };

    fetchAdvert();
  }, [id]);

  const handleDelete = async () => {
    try {
      await client.delete(`/api/v1/adverts/${id}`);
      navigate('/adverts');
    } catch (error) {
      console.error('Error al eliminar el anuncio:', error);
      alert('No se pudo eliminar el anuncio.');
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!advert) {
    return <p>Cargando...</p>;
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <AdvertDetail advert={advert} />
          <Button variant="danger" onClick={handleDelete}>
            Eliminar Anuncio
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AdvertPage;
