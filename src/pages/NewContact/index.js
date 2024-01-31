import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />
      <Input placeholder="Telefone" />
      <Select>
        <option>Hello</option>
      </Select>
      <Button type="button">Cadastrar</Button>
    </>
  );
}

export default NewContact;
