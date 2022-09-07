import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('renders correct chart when select a certain year', () => {
  const dummyData = [
    {
      description: 'House Issurance',
      price: '100',
      date: {
        month: 'Decemeber',
        year: '2021',
        day: '01',
      },
    },
    {
      description: 'New Car',
      price: '1000',
      date: {
        month: 'May',
        year: '2021',
        day: '01',
      },
    },
  ];
  render(<Expenses data={dummyData} />);

  const filterElement = screen.getByLabelText('Filter by year');
  const targetElement = screen.getByText('2021');
  userEvent.selectOptions(filterElement, targetElement);

  const chartBarElements = screen.queryAllByTestId('chart-bar__fill');

  expect(chartBarElements[4]).toHaveStyle('height: 100%');
  expect(chartBarElements[11]).toHaveStyle('height: 10%');
  expect(chartBarElements[0]).toHaveStyle('height: 0%');
});
