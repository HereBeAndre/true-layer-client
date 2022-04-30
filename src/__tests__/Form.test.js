import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Form from '../components/shared/forms/Form';
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

describe('<Form />', () => {
  it('renders Form component', () => {
    act(() => {
      render(<Form />, container);
    });
    expect(container).toBeInTheDocument();
  });

  it('renders its children', () => {
    act(() => {
      render(<App />, container);
    });
    const child = screen.getByTestId('pokemon-search-test-id');
    expect(child).toBeInTheDocument();
  });
});
