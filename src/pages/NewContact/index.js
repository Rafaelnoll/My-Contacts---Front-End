import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

const options = [
  { value: 'Instagram', label: 'Instagram' },
  { value: 'Facebook', label: 'Facebook' },
  { value: 'LinkedIn', label: 'LinkedIn' },
  { value: 'Whatsapp', label: 'Whatsapp' },
];

function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonText="Cadastrar" options={options} />
    </>
  );
}

export default NewContact;
