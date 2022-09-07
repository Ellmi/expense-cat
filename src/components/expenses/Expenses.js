import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  console.log('The expenses be executed.');
  const [selectedYear, setSelectedYear] = useState('2022');

  const filteredExpenses = props.data.filter((item) => {
    return item.date.year.toString() === selectedYear;
  });

  const selectYear = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="expenses" data-testid="expenses">
      <ExpensesFilter selectedYear={selectedYear} onSelect={selectYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
