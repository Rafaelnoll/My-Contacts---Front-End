import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonText="Cadastrar" />
    </>
  );
}

export default NewContact;
