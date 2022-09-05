import { render, screen } from '@testing-library/react';
import ExpenseItem from '../ExpenseItem';

test('renders expense item', () => {
  render(
    <ExpenseItem
      date={{
        date: {
          month: 'Decemeber',
          year: 2020,
          day: '06',
        },
      }}
      description="dummy value"
      price="dummy price"
    />
  );
  const dateElement = screen.getByTestId('expense-date');
  const descriptionElement = screen.getByTestId('expense-item__description');
  const priceElement = screen.getByTestId('expense-item__price');

  expect(dateElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});
