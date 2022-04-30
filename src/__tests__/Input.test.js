import { fireEvent, render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Input from '../components/shared/inputs/Input';
import App from '../App';

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

describe('Input', () => {
  it('renders input element', () => {
    act(() => {
      render(<Input />, container);
    });
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders a label', () => {
    act(() => {
      render(<Input label="I am a label" />, container);
    });
    expect(screen.getByText(/I am a label/)).toBeInTheDocument();
  });

  it('expects input value to be parsed to lower case', () => {
    act(() => {
      render(<App />, container);
    });
    const input = screen.getByTestId('pokemon-search-test-id');
    fireEvent.change(input, { target: { value: 'BULBASAUR' } });
    expect(input.value).toBe('bulbasaur');
  });

  it('expects onChange to have been called and input value to be updated', () => {
    act(() => {
      render(<App />, container);
    });
    const input = screen.getByTestId('pokemon-search-test-id');
    fireEvent.change(input, { target: { value: 'charizard' } });
    expect(input.value).toBe('charizard');
  });
});
