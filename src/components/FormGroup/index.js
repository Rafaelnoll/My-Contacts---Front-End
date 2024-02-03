import p from 'prop-types';

import { Container } from './styles';

function FormGroup({ children, error = null }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: p.node.isRequired,
  error: p.string,
};

export default FormGroup;
