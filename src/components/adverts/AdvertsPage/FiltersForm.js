import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SelectTags from '../SelectTags';

function FiltersForm({ onFilterChange, onResetFilters }) {
  const [name, setName] = useState('');
  const [sale, setSale] = useState('todos');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [tags, setTags] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const filters = {
      name,
      sale: sale === 'todos' ? undefined : sale === 'venta',
      price: `${priceMin}-${priceMax}`,
      tags,
    };
    onFilterChange(filters);
  };

  const handleReset = () => {
    setName('');
    setSale('todos');
    setPriceMin('');
    setPriceMax('');
    setTags([]);
    onResetFilters();
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4 p-3 shadow-sm rounded" style={{ border: '1px solid #ddd' }}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="filterName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="filterSale">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              as="select"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="venta">Venta</option>
              <option value="compra">Compra</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="filterPriceMin">
            <Form.Label>Precio Mínimo</Form.Label>
            <Form.Control
              type="number"
              placeholder="Mínimo"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="filterPriceMax">
            <Form.Label>Precio Máximo</Form.Label>
            <Form.Control
              type="number"
              placeholder="Máximo"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <SelectTags selectedTags={tags} onChange={setTags} />
      <Row>
        <Col>
          <Button variant="primary" type="submit" className="mr-2">
            Filtrar
          </Button>
          <Button variant="danger" onClick={handleReset} className="mr-2">
            Borrar Filtros
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

FiltersForm.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
};

export default FiltersForm;
