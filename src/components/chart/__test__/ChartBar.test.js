import { render, screen } from '@testing-library/react';
import ChartBar from '../ChartBar';

test('renders chartbar', () => {
  render(<ChartBar rateInteger={30} labelText={'May'} />);

  const charLabelElement = screen.queryByText('May');
  expect(charLabelElement).toBeInTheDocument();

  const charBarElement = screen.getByTestId('chart-bar__fill');
  expect(charBarElement).toHaveStyle('height: 30%');
});
