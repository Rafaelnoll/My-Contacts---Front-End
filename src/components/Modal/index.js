import p from 'prop-types';
import Button from '../Button';
import {
  Container, Footer, Overlay,
} from './styles';

function Modal({ danger = false }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Tem certeza que deseja remover o contato "Rafael Noll"?</h1>
        <p>Esta ação não poderá ser desfeita!</p>
        <Footer>
          <button className="cancel-button" type="button">Cancelar</button>
          <Button danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: p.bool,
};

export default Modal;
