import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This will be a french course for developers/i);
  expect(linkElement).toBeInTheDocument();
});
