import PropTypes from 'prop-types';

import { Container, Row } from 'react-bootstrap';
import Character from '../Character';

const Characters = ({ characters }) => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Character />
      </Row>
    </Container>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      created: PropTypes.string,
      gender: PropTypes.string,
      species: PropTypes.string,
      status: PropTypes.string,
    }).isRequired
  ),
};

export default Characters;
