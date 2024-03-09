import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';

import {
  InputSearchContainer, Container, Header, ListContainer, Card, ListHeader, ErrorInfoContainer,
} from './styles';

import Loader from '../../components/Loader';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sadIcon from '../../assets/images/icons/sad.svg';
import ContactService from '../../services/ContactService';
import Button from '../../components/Button';

function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const filtredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToogleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          placeholder="Pesquisar contato..."
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>

      <Header hasError={hasError}>
        {!hasError && (
          <strong>
            {filtredContacts.length}
            {filtredContacts.length === 1 ? ' Contato' : ' Contatos'}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
      <ErrorInfoContainer>
        <img src={sadIcon} alt="Rosto triste" />
        <div className="info">
          <span>Ocorreu um erro ao obter os seus contatos!</span>
          <Button onClick={loadContacts} type="button">Tentar Novamente</Button>
        </div>
      </ErrorInfoContainer>
      )}

      {!hasError && (
        <ListContainer>
          { filtredContacts.length > 0
        && (
        <ListHeader orderby={orderBy}>
          <button type="button" onClick={handleToogleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
        )}

          {filtredContacts.map((contact) => (
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
      )}
    </Container>
  );
}

export default Home;
