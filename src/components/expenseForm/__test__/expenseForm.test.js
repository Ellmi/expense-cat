import { render, screen } from '@testing-library/react';
import ExpenseForm from '../ExpenseForm';

test('renders expense form', () => {
  render(<ExpenseForm />);
  const expenseFormElement = screen.getByText('Add Expense');
  expect(expenseFormElement).toBeInTheDocument();
});
