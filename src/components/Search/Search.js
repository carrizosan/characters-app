import { useState } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';

const Search = () => {
  const [search, setSearch] = useState('');

  const getSearch = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={getSearch} my={4}>
      <InputGroup>
        <FormControl placeholder='Search...' value={search} name='search' onChange={(e) => setSearch(e.target.value)} />
      </InputGroup>
    </Form>
  );
};

export default Search;
