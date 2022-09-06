import { render, screen } from '@testing-library/react';
import NewExpense from '../NewExpense';

test('renders expense form', () => {
  render(<NewExpense onAddNew={jest.fn()} />);
  const expenseFormElement = screen.getByTestId('new-expense');
  expect(expenseFormElement).toBeInTheDocument();
});
