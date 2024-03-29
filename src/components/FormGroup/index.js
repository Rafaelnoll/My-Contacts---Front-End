import p from 'prop-types';

import { Container } from './styles';

function FormGroup({ children, error = null, isLoading = false }) {
  return (
    <Container>

      <div className="form-item">
        {children}
        {isLoading && <div className="loader" />}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: p.node.isRequired,
  error: p.string,
  isLoading: p.bool,
};

export default FormGroup;
