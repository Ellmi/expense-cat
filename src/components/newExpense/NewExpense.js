import ExpenseForm from '../expenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  console.log('The newExpense be executed.');
  return (
    <div className="new-expense" data-testid="new-expense">
      <ExpenseForm onSubmit={props.onAddNew} />
    </div>
  );
}

export default NewExpense;
