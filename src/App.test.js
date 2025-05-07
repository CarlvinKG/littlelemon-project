import { render, screen } from '@testing-library/react';
import App from '../src/App'

test('renders text on home page', () => {
  render(<App />);

  const h2Element = screen.getByText(/This week's specials/);
  expect(h2Element).toBeInTheDocument();

});