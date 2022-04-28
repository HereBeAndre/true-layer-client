/* eslint-disable no-nested-ternary */
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import { fetchData } from 'api';
import { IPokemonData } from 'schemas/pokemonData_d';

import './App.css';

function App() {
  const [userInput, setUserInput] = useState<string>(() => '');
  const [isLoading, setIsLoading] = useState<boolean>(() => false);
  const [pokemonData, setPokemonData] = useState<IPokemonData>({} as IPokemonData);
  const [error, setError] = useState<string>('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setUserInput(e.target.value);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (userInput) {
      fetchData(userInput).then(
        (response) => {
          setPokemonData(response.data);
          setIsLoading(false);
        },
        /* Handle errors here instead of a catch() block so that we don't swallow
          exceptions from actual bugs in component */
        (err) => {
          setError(err.response.data.message);
          setIsLoading(false);
        },
      );
    }
    setUserInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleFormSubmit}>
          <input type="text" onChange={handleInputChange} value={userInput} />
          <button type="submit">Search</button>
        </form>
        {isLoading ? (
          'Loading...'
        ) : Object.values(pokemonData).length ? (
          <p>{pokemonData.description}</p>
        ) : (
          error
        )}
      </header>
    </div>
  );
}

export default App;
