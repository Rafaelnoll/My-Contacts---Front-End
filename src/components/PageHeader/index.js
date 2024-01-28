import { Link } from 'react-router-dom';
import p from 'prop-types';

import { Container } from './styles';
import arrow from '../../assets/images/icons/arrow.svg';

function PageHeader({ title = 'Title' }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Arrow pointing to the left" />
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: p.string,
};

export default PageHeader;
