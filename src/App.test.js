import { render, screen } from '@testing-library/react';
import App from './App';

test('renders expense', () => {
  render(<App />);
  const expenseElement = screen.getByTestId('expenses');
  expect(expenseElement).toBeInTheDocument();

  const newExpenseElement = screen.getByTestId('new-expense');
  expect(newExpenseElement).toBeInTheDocument();
});
