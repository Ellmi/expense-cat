import './Expenses.css';
import ExpenseItem from '../expense-item/ExpenseItem';

function Expenses(props) {
  return (
    <div className="expenses" data-testid="expenses">
      {props.data.map((item) => {
        return (<ExpenseItem date={item.date} description={item.description} price={item.price} />);
      })}
    </div>
  );
}

export default Expenses;
