import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

function EditContact() {
  return (
    <>
      <PageHeader title="Editar Contato" />
      <ContactForm buttonText="Salvar alterações" options={[]} />
    </>
  );
}

export default EditContact;
