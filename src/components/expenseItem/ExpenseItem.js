import Date from './Date';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item" data-testid="expense-item">
      <Date month={props.date.month} year={props.date.year} day={props.date.day}/>
      <div
        className="expense-item__description"
        data-testid="expense-item__description"
      >
        <h2>{props.description} </h2>
      </div>
      <div className="expense-item__price" data-testid="expense-item__price">
        {props.price}
      </div>
    </div>
  );
}

export default ExpenseItem;
