import { render, screen } from '@testing-library/react';
import Price from '../Price';

test('renders expense item price', () => {
  render(<Price />);
  const priceElement = screen.getByTestId('expense-item__price');
  expect(priceElement).toBeInTheDocument();
});
