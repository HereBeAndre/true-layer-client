import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { CircularProgress } from '@mui/material';

import { fetchData } from 'api';
import { IPokemonData } from 'schemas/pokemonData_d';

import Form from 'components/shared/forms/Form';
import Input from 'components/shared/inputs/Input';
import GenericButton from 'components/shared/buttons/GenericButton';
import UsePokemonData from 'components/shared/UsePokemonData/UsePokemonData';

import './App.css';

/* Pokemon names length
  Shortest => 4 
  Longest => 11
*/
const validatePokemonSearchInput = (pokemonName: string): boolean =>
  pokemonName.length < 4 || pokemonName.length > 11;

function App() {
  const [userInput, setUserInput] = useState<string>(() => '');
  const [isLoading, setIsLoading] = useState<boolean>(() => false);
  const [pokemonData, setPokemonData] = useState<IPokemonData>({} as IPokemonData);
  const [error, setError] = useState<string>('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setUserInput(e.target.value.toLocaleLowerCase());

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (userInput) {
      fetchData(userInput).then(
        (response) => {
          setError('');
          setPokemonData(response?.data);
          setIsLoading(false);
        },
        /* Handle errors here instead of a catch() block so that we don't swallow
          exceptions from actual bugs in component */
        (err) => {
          setPokemonData({} as IPokemonData);
          setError(err?.response?.data?.message);
          setIsLoading(false);
        },
      );
    }
    setUserInput('');
  };

  return (
    <div className="App">
      <div className="App__main">
        <Form handleFormSubmit={handleFormSubmit}>
          <Input
            id="pokemon-search"
            label="Search a Pokemon"
            handleInputChange={handleInputChange}
            value={userInput}
            inputProps={{
              'data-testid': 'pokemon-search-test-id',
            }}
          />
          <GenericButton type="submit" disabled={validatePokemonSearchInput(userInput)}>
            Submit
          </GenericButton>
        </Form>
        <div className="pokemon__result__container">
          {isLoading ? (
            <CircularProgress size={32} />
          ) : (
            <UsePokemonData pokemonData={pokemonData} error={error} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
