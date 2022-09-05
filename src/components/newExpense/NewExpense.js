import ExpenseForm from '../expenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense() {
  return (
    <div className="new-expense" data-testid="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
