import { ReactElement } from 'react';
import { IPokemonData } from 'schemas/pokemonData_d';

import './UsePokemonData.css';

interface IUsePokemonDataProps {
  pokemonData: IPokemonData;
  error: string;
}

const UsePokemonData: React.FC<IUsePokemonDataProps> = ({
  pokemonData,
  error,
}): ReactElement | null => {
  if (error) {
    return <p className="request__error__font">{error}</p>;
  }

  if (pokemonData && Object.values(pokemonData).length) {
    return (
      <>
        <p>
          Sir Shakespeare would say about{' '}
          <span className="pokemon__name__font">{pokemonData.name}</span>
        </p>
        <p className="pokemon__description__font">{pokemonData.description}</p>
      </>
    );
  }

  return null;
};

export default UsePokemonData;
