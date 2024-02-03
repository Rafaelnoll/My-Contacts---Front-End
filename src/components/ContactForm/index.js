import p from 'prop-types';

import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { Form } from './styles';
import FormGroup from '../FormGroup';
import { ButtonContainer } from '../FormGroup/styles';

function ContactForm({ buttonText = '', options = [], onConfirm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    onConfirm({
      name,
      email,
      phone,
      category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Sem Categoria</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonText}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonText: p.string,
  onConfirm: p.func,
  options: p.arrayOf(p.shape({ value: p.string, label: p.string })).isRequired,
};

export default ContactForm;
