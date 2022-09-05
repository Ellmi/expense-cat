import { render, screen } from '@testing-library/react';
import Date from '../Date';

test('renders expense item date', () => {
  render(<Date month="dummyMonth" year="2022" day="01" />);
  const dateElement = screen.getByText('dummyMonth');
  expect(dateElement).toBeInTheDocument();
});
