import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import GenericButton from '../components/shared/buttons/GenericButton';

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

describe('<GenericButton />', () => {
  it('renders button element', () => {
    act(() => {
      render(<GenericButton />, container);
    });
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders children', () => {
    act(() => {
      render(<GenericButton>Submit</GenericButton>, container);
    });
    expect(screen.getByText(/Submit/)).toBeInTheDocument();
  });

  it('expects button to be enabled', () => {
    act(() => {
      render(<GenericButton />, container);
    });
    const button = screen.getByRole('button');
    expect(button.disabled).toBe(false);
  });

  it('expects button to be disabled', () => {
    act(() => {
      render(<GenericButton disabled={true} />, container);
    });
    const button = screen.getByRole('button');
    expect(button.disabled).toBe(true);
  });
});
