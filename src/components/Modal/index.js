import p from 'prop-types';
import ReactDom from 'react-dom';

import Button from '../Button';
import {
  Container, Footer, Overlay,
} from './styles';

function Modal({
  danger = false,
  title = 'Title',
  description = '',
  confirmButtonText = 'Confirmar',
  cancelButtonText = 'Cancelar',
}) {
  return ReactDom.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Footer>
          <button className="cancel-button" type="button">{cancelButtonText}</button>
          <Button danger={danger}>{confirmButtonText}</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: p.bool,
  title: p.string,
  description: p.string,
  confirmButtonText: p.string,
  cancelButtonText: p.string,
};

export default Modal;
