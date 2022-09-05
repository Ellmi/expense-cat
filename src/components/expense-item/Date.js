import './Date.css';

function Date(props) {
  return (
    <div className="expense-date" data-testid="expense-date">
      <div className="expense-date__month" data-testid="expense-date__month">{props.month}</div>
      <div className="expense-date__year" data-testid="expense-date__year">{props.year}</div>
      <div className="expense-date__day" data-testid="expense-date__day">{props.day}</div>
    </div>
  );
}

export default Date;
