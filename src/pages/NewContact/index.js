import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactService from '../../services/ContactService';

function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        categoryId: formData.category,
      };

      await ContactService.createContact(contactData);
    } catch {}
  }

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonText="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}

export default NewContact;
