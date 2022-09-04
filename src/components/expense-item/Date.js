import './Date.css';

function Date() {
  return (
    <div className="expense-date" data-testid="expense-date">
      <div className="expense-date__month" data-testid="expense-date__month">December</div>
      <div className="expense-date__year" data-testid="expense-date__year">2022</div>
      <div className="expense-date__day" data-testid="expense-date__day">01</div>
    </div>
  );
}

export default Date;
