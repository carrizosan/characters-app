import './App.scss';
import Loading from './components/common/Loading';
import Characters from './components/Characters';
import Search from './components/Search';

import { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import { Container } from 'react-bootstrap';

function App() {
  const [endpoint, setEndpoint] = useState('character');
  const { loading, data, error } = useFetch(endpoint);
  const { results: characters, info } = data;

  const findCharacters = (character) => {
    setEndpoint(`character?name=${character}`);
  };

  if (loading) return <Loading />;

  // if (error) return <h3>Ocurrió un error</h3>;

  return (
    <Container>
      <Search findCharacters={findCharacters} />
      <Characters characters={characters} />
    </Container>
  );
}

export default App;
