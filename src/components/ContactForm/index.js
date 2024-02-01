import p from 'prop-types';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { Form } from './styles';
import FormGroup from '../FormGroup';
import { ButtonContainer } from '../FormGroup/styles';

function ContactForm({ buttonText = '', options = [] }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" type="text" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" type="email" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" type="text" />
      </FormGroup>

      <FormGroup>
        <Select>
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
  options: p.arrayOf(p.shape({ value: p.string, label: p.string })).isRequired,
};

export default ContactForm;
