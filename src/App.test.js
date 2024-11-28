import { render, screen } from '@testing-library/react';
import App from './App';

test('renders accessories shop title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Eve's Accessories Shop/i);
  expect(titleElement).toBeInTheDocument();
});
