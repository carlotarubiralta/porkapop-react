import { useState } from 'react';

function useForm(initialState = {}) {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return [values, handleChange, resetForm];
}

export default useForm;
