import './Expenses.css';
import ExpenseItem from '../expenseItem/ExpenseItem';

function Expenses(props) {
  console.log("The expenses be executed.")
  return (
    <div className="expenses" data-testid="expenses">
      {props.data.map((item, index) => {
        return (
          <ExpenseItem
            key={index}
            date={item.date}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
