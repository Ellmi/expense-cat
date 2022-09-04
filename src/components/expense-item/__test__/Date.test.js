import { render, screen } from '@testing-library/react';
import Date from '../Date';

test('renders expense item date', () => {
  render(<Date />);
  const dateElement = screen.getByTestId('expense-date');
  expect(dateElement).toBeInTheDocument();
});
