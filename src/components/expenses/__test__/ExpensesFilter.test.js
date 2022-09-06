import { render, screen } from '@testing-library/react';
import ExpensesFilter from '../ExpensesFilter';

test('renders expenses filter', () => {
  render(<ExpensesFilter />);
  const expenseElement = screen.getByText('Filter by year');
  expect(expenseElement).toBeInTheDocument();
});
