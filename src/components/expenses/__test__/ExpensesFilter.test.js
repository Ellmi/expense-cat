import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExpensesFilter from '../ExpensesFilter';

test('renders expenses filter', () => {
  render(<ExpensesFilter />);
  const expenseElement = screen.getByText('Filter by year');
  expect(expenseElement).toBeInTheDocument();
});

test('should select certain year and call onSelect handler', () => {
  let mockOnSelect = jest.fn();
  render(<ExpensesFilter onSelect={mockOnSelect} />);
  const filterElement = screen.getByLabelText('Filter by year');
  const targetElement = screen.getByText('2022');
  userEvent.selectOptions(filterElement, targetElement);
  expect(mockOnSelect).toBeCalledWith('2022');
});
