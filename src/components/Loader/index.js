import ReactDom from 'react-dom';
import P from 'prop-types';

import { Overlay } from './styles';
import Spinner from '../Spinner';

function Loader({ isLoading }) {
  if (!isLoading) return null;

  return ReactDom.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: P.bool.isRequired,
};

export default Loader;
