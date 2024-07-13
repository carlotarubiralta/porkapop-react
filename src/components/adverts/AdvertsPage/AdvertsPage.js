import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getAdverts } from '../service';
import AdvertsList from './AdvertsList';
import FiltersForm from './FiltersForm';
import EmptyList from './EmptyList';
import { filterByName, filterBySale, filterByPrice, filterByTags } from './filters';

function AdvertsPage() {
  const [adverts, setAdverts] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredAdverts, setFilteredAdverts] = useState([]);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const fetchedAdverts = await getAdverts();
        setAdverts(fetchedAdverts);
        setFilteredAdverts(fetchedAdverts);
      } catch (error) {
        console.error('Error al obtener los anuncios:', error);
      }
    };

    fetchAdverts();
  }, []);

  useEffect(() => {
    let result = adverts;
    if (filters.name) {
      result = filterByName(result, filters.name);
    }
    if (filters.sale !== undefined) {
      result = filterBySale(result, filters.sale);
    }
    if (filters.price && filters.price !== '-') {
      const [minPrice, maxPrice] = filters.price.split('-').map(Number);
      result = filterByPrice(result, minPrice, maxPrice);
    }
    if (filters.tags && filters.tags.length) {
      result = filterByTags(result, filters.tags);
    }
    setFilteredAdverts(result);
  }, [filters, adverts]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({});
    setFilteredAdverts(adverts);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2>Anuncios</h2>
          <FiltersForm onFilterChange={handleFilterChange} onResetFilters={handleResetFilters} />
          <Button as={Link} to="/adverts/new" variant="primary" className="mb-3">
            Crear Anuncio
          </Button>
          {filteredAdverts.length ? (
            <AdvertsList adverts={filteredAdverts} />
          ) : (
            <EmptyList />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AdvertsPage;
