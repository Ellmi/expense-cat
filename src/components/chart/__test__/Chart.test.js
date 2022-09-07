import { render, screen } from '@testing-library/react';
import Chart from '../Chart';
import ChartContext from '../ChartContext';

test('renders chart', () => {
  render(
    <ChartContext.Provider value={[]}>
      <Chart />
    </ChartContext.Provider>
  );

  const charLabelElement = screen.queryByTestId('chart');
  expect(charLabelElement).toBeInTheDocument();
});

test('renders two chartbars in chart', () => {
  const dummyMonthPercentage = { Jan: 10, Feb: 20 };

  render(
    <ChartContext.Provider value={dummyMonthPercentage}>
      <Chart />
    </ChartContext.Provider>
  );

  const chartBarElements = screen.getAllByTestId('chart-bar');
  expect(chartBarElements.length).toBe(2);
});
