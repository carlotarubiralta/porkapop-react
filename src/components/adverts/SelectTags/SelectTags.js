import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import client from '../../../api/client';

function SelectTags({ selectedTags, onChange }) {
  const [availableTags, setAvailableTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await client.get('/api/v1/adverts/tags');
        setAvailableTags(response.data);
      } catch (error) {
        console.error('Error al obtener los tags:', error);
      }
    };

    fetchTags();
  }, []);

  const handleChange = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    onChange(value);
  };

  return (
    <Form.Group controlId="filterTags">
      <Form.Label>Tags</Form.Label>
      <Form.Control
        as="select"
        multiple
        value={selectedTags}
        onChange={handleChange}
      >
        {availableTags.map(tag => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}

SelectTags.propTypes = {
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectTags;
