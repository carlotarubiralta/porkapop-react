import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function FiltersForm({ onFilterChange }) {
  const [name, setName] = useState('');
  const [sale, setSale] = useState('todos');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [tags, setTags] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterChange({
      name,
      sale: sale === 'todos' ? undefined : sale === 'venta',
      price: `${priceMin}-${priceMax}`,
      tags,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
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
        <Col>
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
        <Col>
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
        <Col>
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
      <Button variant="primary" type="submit">
        Filtrar
      </Button>
    </Form>
  );
}

FiltersForm.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default FiltersForm;