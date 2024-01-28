import { Link } from 'react-router-dom';

import {
  InputSearchContainer, Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rafael Noll</strong>
              <small>Instagram</small>
            </div>

            <span>rafael@devacademy.com.br</span>
            <span>(45) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/edit">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>

        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rafael Noll</strong>
              <small>Instagram</small>
            </div>

            <span>rafael@devacademy.com.br</span>
            <span>(45) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/edit">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>

        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rafael Noll</strong>
              <small>Instagram</small>
            </div>

            <span>rafael@devacademy.com.br</span>
            <span>(45) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/edit">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>

        </Card>
      </ListContainer>
    </Container>
  );
}

export default Home;
