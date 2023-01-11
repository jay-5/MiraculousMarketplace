import { render, screen } from '@testing-library/react';
import DevToolMarketplace from './DevToolMarketplace';

test('renders learn react link', () => {
  render(<DevToolMarketplace />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
