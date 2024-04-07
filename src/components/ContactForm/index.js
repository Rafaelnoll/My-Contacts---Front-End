import p from 'prop-types';

import { useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { Form } from './styles';
import FormGroup from '../FormGroup';
import { ButtonContainer } from '../FormGroup/styles';
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/formatPhone';
import CategoryService from '../../services/CategoryService';

function ContactForm({ buttonText = '', onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categorySelected, setCategorySelected] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const {
    errors, getFieldErrorMessage, removeError, setError,
  } = useErrors();

  const isFormValid = name && errors.length === 0;

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) return;

    onSubmit({
      name,
      email,
      phone: phone.replace(/\D/g, ''),
      category: categorySelected,
    });
  }

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePhone(event) {
    setPhone(formatPhone(event.target.value));
  }

  useEffect(() => {
    async function loadCategories() {
      try {
        setIsLoadingCategories(true);
        const data = await CategoryService.listCategories();
        setCategories(data);
      } catch {} finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getFieldErrorMessage('name')}>
        <Input placeholder="Nome *" type="text" value={name} onChange={handleNameChange} error={getFieldErrorMessage('name')} />
      </FormGroup>

      <FormGroup error={getFieldErrorMessage('email')}>
        <Input placeholder="E-mail" type="email" value={email} onChange={handleEmailChange} error={getFieldErrorMessage('email')} />
      </FormGroup>

      <FormGroup>
        <Input maxLength="15" placeholder="Telefone" type="text" value={phone} onChange={handlePhone} />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          disabled={isLoadingCategories}
          value={categorySelected}
          onChange={(e) => setCategorySelected(e.target.value)}
        >
          <option value="">Sem Categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>{buttonText}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonText: p.string,
  onSubmit: p.func,
};

export default ContactForm;
