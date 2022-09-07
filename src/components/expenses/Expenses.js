import './Expenses.css';
import ExpenseItem from '../expenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import Chart from '../chart/Chart';
import ChartContext from '../chart/ChartContext';

function Expenses(props) {
  console.log('The expenses be executed.');
  const [selectedYear, setSelectedYear] = useState('2022');

  const filteredExpenses = props.data.filter((item) => {
    return item.date.year.toString() === selectedYear;
  });

  const selectYear = (year) => {
    setSelectedYear(year);
  };

  const monthsPercentage = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };
  filteredExpenses.map(
    (expense) =>
      (monthsPercentage[expense.date.month.substring(0, 3)] += +expense.price)
  );

  const maxMonthAmount = Math.max(...Object.values(monthsPercentage));

  if (maxMonthAmount > 0) {
    Object.keys(monthsPercentage).map(
      (month) =>
        (monthsPercentage[month] = Math.round(
          (monthsPercentage[month] / maxMonthAmount) * 100
        ))
    );
  }

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
      <ChartContext.Provider value={monthsPercentage}>
        <Chart />
      </ChartContext.Provider>
      {expensesItems}
    </div>
  );
}

export default Expenses;
