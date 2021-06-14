import './App.scss';

import { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import Characters from './components/Characters';

function App() {
  const [endpoint, setEndpoint] = useState('character');
  const [loading, data, error] = useFetch(endpoint);
  const { results: characters, info } = data;
  console.log(data);

  return (
    <div>
      <Characters characters={characters} />
    </div>
  );
}

export default App;
