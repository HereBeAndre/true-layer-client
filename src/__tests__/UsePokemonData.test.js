import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import UsePokemonData from '../components/shared/UsePokemonData/UsePokemonData';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('UsePokemonData', () => {
  it('renders an error message', () => {
    act(() => {
      render(<UsePokemonData error="An error has occurred" />, container);
    });
    expect(screen.getByText(/An error has occurred/)).toBeInTheDocument();
    expect(screen.getByText(/An error has occurred/)).toHaveClass('request__error__font');
  });

  it('renders nothing', () => {
    act(() => {
      render(<UsePokemonData />, container);
    });
    const child = screen.queryByTestId('data-testid');
    expect(child).not.toBeInTheDocument();
  });

  it('renders Pokemon data', () => {
    const mockPokemonData = { name: 'Pikachu', description: 'Pikaaaaa' };
    act(() => {
      render(<UsePokemonData pokemonData={mockPokemonData} />, container);
    });

    expect(Object.keys(mockPokemonData).length).toEqual(2);

    expect(screen.getByText(/Pikachu/)).toBeInTheDocument();
    expect(screen.getByText(/Pikachu/)).toHaveClass('pokemon__name__font');

    expect(screen.getByText(/Pikaaaaa/)).toBeInTheDocument();
    expect(screen.getByText(/Pikaaaaa/)).toHaveClass('pokemon__description__font');
  });
});
