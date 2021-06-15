import PropTypes from 'prop-types';

import { memo } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';

const Search = ({ findCharacters }) => {
  const getSearch = (e) => {
    e.preventDefault();
    const [search] = e.target.elements;
    findCharacters(search.value.trim());
  };

  return (
    <Form onSubmit={getSearch} my={4} className='seach-form'>
      <InputGroup>
        <FormControl placeholder='Search...' name='search' />
      </InputGroup>
    </Form>
  );
};

Search.propTypes = {
  findCharacters: PropTypes.func.isRequired,
};

export default memo(Search);
