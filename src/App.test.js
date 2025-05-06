import { render, screen } from '@testing-library/react';
import App from '../src/App'

test('renders text on home page', () => {
  render(<App />);
  //  fix linkElement below to pass test with the current App.js code
  const h2Element = screen.getByText(/This week's specials/i);
  // const linkElement = screen.getByText(/learn react/i);
  expect(h2Element).toBeInTheDocument();
});