import { render, screen } from '@testing-library/react';
import Expenses from '../Expenses';

test('renders expenses', () => {
  render(<Expenses />);
  const expenseElement = screen.getByTestId('expenses');
  expect(expenseElement).toBeInTheDocument();
});
