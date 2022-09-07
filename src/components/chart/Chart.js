import { useContext } from 'react';
import './Chart.css';
import ChartBar from './ChartBar';
import ChartContext from './ChartContext';

function Chart() {
  const monthsPercentage = useContext(ChartContext);

  return (
    <div className="chart" data-testid="chart">
      {Object.keys(monthsPercentage).map((month) => (
        <ChartBar
          key={month}
          labelText={month}
          rateInteger={monthsPercentage.month}
        />
      ))}
    </div>
  );
}

export default Chart;
