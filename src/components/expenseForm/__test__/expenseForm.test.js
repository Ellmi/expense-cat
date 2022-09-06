import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExpenseForm from '../ExpenseForm';

test('renders expense form', () => {
  render(<ExpenseForm />);
  const expenseFormElement = screen.getByText('Add Expense');
  expect(expenseFormElement).toBeInTheDocument();
});

test('submmit expense form should call onSubmit handler', () => {
  let mockOnSumit = jest.fn();
  render(<ExpenseForm onSubmit={mockOnSumit} />);

  const submitButtonElement = screen.getByText('Add Expense');
  const titleElement = screen.getByLabelText('Title');
  const priceElement = screen.getByLabelText('Amount');
  const dateElement = screen.getByLabelText('Date');
  userEvent.type(titleElement, 'dummyTitle');
  userEvent.type(priceElement, '100');
  userEvent.type(dateElement, '2022-02-02');
  userEvent.click(submitButtonElement);

  expect(mockOnSumit).lastCalledWith({
    description: 'dummyTitle',
    price: '100',
    date: {
      month: 'February',
      year: 2022,
      day: '02',
    },
  });
});
