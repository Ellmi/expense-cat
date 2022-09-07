import './Expenses.css';
import ExpenseItem from '../expenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import Chart from '../chart/Chart';

function Expenses(props) {
  console.log('The expenses be executed.');
  const [selectedYear, setSelectedYear] = useState('2022');

  const filteredExpenses = props.data.filter((item) => {
    return item.date.year.toString() === selectedYear;
  });

  const selectYear = (year) => {
    setSelectedYear(year);
  };

  let expensesItems = (
    <div className="expenses__empty">No expense item found</div>
  );

  if (filteredExpenses.length > 0) {
    expensesItems = filteredExpenses.map((item, index) => (
      <ExpenseItem
        key={index}
        date={item.date}
        description={item.description}
        price={item.price}
      />
    ));
  }

  return (
    <div className="expenses" data-testid="expenses">
      <ExpensesFilter selectedYear={selectedYear} onSelect={selectYear} />
      <Chart />
      {expensesItems}
    </div>
  );
}

export default Expenses;
