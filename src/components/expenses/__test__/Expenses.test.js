import { render, screen } from '@testing-library/react';
import Expenses from '../Expenses';

test('renders expenses', () => {
  render(<Expenses data={[]} />);
  const expenseElement = screen.getByTestId('expenses');
  expect(expenseElement).toBeInTheDocument();
});

test('renders expenses with filtered items', () => {
  const dummyData = [
    {
      description: 'dummy value one',
      price: 'dummy price one',
      date: {
        month: 'dummy month one',
        year: '2022',
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
  expect(expenseItemElements.length).toBe(1);
});

test('renders no expenses item found text', () => {
  const dummyData = [
    {
      description: 'dummy value one',
      price: 'dummy price one',
      date: {
        month: 'dummy month one',
        year: '2021',
        day: 'dummy day one',
      },
    },
  ];
  render(<Expenses data={dummyData} />);

  const expenseItemElements = screen.queryAllByTestId('expense-item');
  expect(expenseItemElements.length).toBe(0);

  const noItemTextElement = screen.getByText('No expense item found');
  expect(noItemTextElement).toBeInTheDocument();
});
