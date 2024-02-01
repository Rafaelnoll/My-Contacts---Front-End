import p from 'prop-types';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { ContainerForm } from './styles';

function ContactForm({ buttonText = '', options = [] }) {
  return (
    <ContainerForm>
      <Input placeholder="Nome" type="text" />
      <Input placeholder="E-mail" type="email" />
      <Input placeholder="Telefone" type="text" />
      <Select>
        <option value="">Sem Categoria</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>))}
      </Select>
      <Button type="button">{buttonText}</Button>
    </ContainerForm>
  );
}

ContactForm.propTypes = {
  buttonText: p.string,
  options: p.arrayOf(p.shape({ value: p.string, label: p.string })).isRequired,
};

export default ContactForm;
