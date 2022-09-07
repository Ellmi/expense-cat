import './ChartBar.css';

function ChartBar(props) {
  return (
    <div>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div
            className="chart-bar__fill"
            data-testid="chart-bar__fill"
            style={{ height: props.rateInteger + '%' }}
          ></div>
        </div>
        <label className="chart-bar__label">{props.labelText}</label>
      </div>
    </div>
  );
}

export default ChartBar;
