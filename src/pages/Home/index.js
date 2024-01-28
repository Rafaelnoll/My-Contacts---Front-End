import { ContactsList } from '../../components/ContactsList';
import { InputSearchContainer } from './styles';

function Home() {
  return (
    <>
      <InputSearchContainer>
        <input placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <ContactsList />
    </>
  );
}

export default Home;
