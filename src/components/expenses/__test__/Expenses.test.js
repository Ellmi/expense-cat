import { render, screen } from '@testing-library/react';
import Expenses from '../Expenses';

test('renders expenses', () => {
  render(<Expenses data={[]} />);
  const expenseElement = screen.getByTestId('expenses');
  expect(expenseElement).toBeInTheDocument();
});

test('renders expenses with two items', () => {
  const dummyData = [
    {
      description: 'dummy value one',
      price: 'dummy price one',
      date: {
        month: 'dummy month one',
        year: 'dummy year one',
        day: 'dummy day one',
      },
    },
    {
      description: 'dummy value two',
      price: 'dummy price two',
      date: {
        month: 'dummy month two',
        year: 'dummy year two',
        day: 'dummy day two',
      },
    },
  ];
  render(<Expenses data={dummyData} />);

  const expenseItemElements = screen.getAllByTestId('expense-item');
  expect(expenseItemElements.length).toBe(2);
});
