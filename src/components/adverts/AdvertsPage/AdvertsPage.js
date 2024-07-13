import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import client from '../../../api/client';
import AdvertsList from './AdvertsList';
import FiltersForm from './FiltersForm';
import EmptyList from './EmptyList';
import { filterByName, filterBySale, filterByPrice, filterByTags } from './filters';

function AdvertsPage() {
  const [adverts, setAdverts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await client.get('/api/v1/adverts');
        setAdverts(response.data);
      } catch (error) {
        console.error('Error al obtener los anuncios:', error);
      }
    };

    fetchAdverts();
  }, []);

  const applyFilters = (adverts, filters) => {
    let filteredAdverts = adverts;
    if (filters.name) {
      filteredAdverts = filterByName(filteredAdverts, filters.name);
    }
    if (filters.sale !== undefined) {
      filteredAdverts = filterBySale(filteredAdverts, filters.sale);
    }
    if (filters.price) {
      const [minPrice, maxPrice] = filters.price.split('-').map(Number);
      filteredAdverts = filterByPrice(filteredAdverts, minPrice, maxPrice);
    }
    if (filters.tags && filters.tags.length) {
      filteredAdverts = filterByTags(filteredAdverts, filters.tags);
    }
    return filteredAdverts;
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredAdverts = applyFilters(adverts, filters);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2>Anuncios</h2>
          <FiltersForm onFilterChange={handleFilterChange} />
          {filteredAdverts.length ? (
            <AdvertsList adverts={filteredAdverts} />
          ) : (
            <EmptyList />
          )}
          <Button as={Link} to="/adverts/new" variant="primary">
            Crear Anuncio
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AdvertsPage;
