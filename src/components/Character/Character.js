import PropTypes from 'prop-types';

import { Card, Col } from 'react-bootstrap';

const Character = ({ id, name, image, status, gender, species, created }) => {
  return (
    <Col md={4} sm={12}>
      <Card className='character-margin'>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>#{id}</Card.Text>
          <Card.Text>Status: {status}</Card.Text>
          <Card.Text>Created: {created}</Card.Text>
          <Card.Text>Gender: {gender}</Card.Text>
          <Card.Text>Species: {species}</Card.Text>
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
    image: PropTypes.string,
  }),
};

export default Character;
