import PropTypes from 'prop-types';

import { Card, Col } from 'react-bootstrap';

const Character = ({ character }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant='top' src='holder.js/100px160' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    created: PropTypes.string,
    gender: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default Character;
