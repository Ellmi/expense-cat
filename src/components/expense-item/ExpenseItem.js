import Price from './Price';
import Date from './Date';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item" data-testid="expense-item">
      <Date />
      <div className="expense-item__description" data-testid="expense-item__description">
        <h2>House Issurance</h2>
      </div>
      <Price />
    </div>
  );
}

export default ExpenseItem;
