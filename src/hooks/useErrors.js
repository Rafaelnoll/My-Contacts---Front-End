import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function getFieldErrorMessage(field) {
    return errors.find((error) => error.field === field)?.message;
  }

  function setError({ field, message }) {
    const errorAlreadyExists = getFieldErrorMessage(field);

    if (errorAlreadyExists) return;

    setErrors((prevState) => ([
      ...prevState,
      { field, message },
    ]));
  }

  function removeError(field) {
    setErrors((prevState) => prevState.filter((error) => error.field !== field));
  }

  return {
    errors,
    setError,
    removeError,
    getFieldErrorMessage,
  };
}
