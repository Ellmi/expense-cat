import './Expenses.css';
import ExpenseItem from '../expense-item/ExpenseItem';

function Expenses() {
  return (
    <div className="expenses" data-testid="expenses">
      <ExpenseItem />
    </div>
  );
}

export default Expenses;
