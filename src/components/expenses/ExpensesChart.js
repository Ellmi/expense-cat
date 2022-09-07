import Chart from '../chart/Chart';
import ChartContext from '../chart/ChartContext';

function ExpensesChart(props) {
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

  props.expenses.map(
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

  return (
    <ChartContext.Provider value={monthsPercentage}>
      <Chart />
    </ChartContext.Provider>
  );
}

export default ExpensesChart;
