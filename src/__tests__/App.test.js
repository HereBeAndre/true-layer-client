import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App', () => {
  it('renders App component', () => {
    act(() => {
      render(<App />, container);
    });
    expect(container).toBeInTheDocument();
  });

  it('renders Input component', () => {
    act(() => {
      render(<App />, container);
    });
    const textInput = screen.getByRole('textbox');
    expect(textInput).toBeInTheDocument();
  });

  it('renders Button component', () => {
    act(() => {
      render(<App />, container);
    });
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
