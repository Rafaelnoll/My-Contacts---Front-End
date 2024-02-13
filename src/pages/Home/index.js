import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  InputSearchContainer, Container, Header, ListContainer, Card, ListHeader,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.log(error));
  }, [orderBy]);

  function handleToogleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <Container>
      <InputSearchContainer>
        <input placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' Contatos' : ' Contato'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToogleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>

        {contacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && <small>{contact.category_name}</small>}
              </div>

              {contact.email && <span>{contact.email}</span>}
              {contact.phone && <span>{contact.phone}</span>}
            </div>

            <div className="actions">
              <a href={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </a>

              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>

          </Card>
        ))}
      </ListContainer>
    </Container>
  );
}

export default Home;
