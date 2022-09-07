import ExpenseItem from '../expenseItem/ExpenseItem';

function ExpensesList(props) {
  let expensesItems = (
    <div className="expenses__empty">No expense item found</div>
  );

  if (props.expenses.length > 0) {
    expensesItems = props.expenses.map((item, index) => (
      <ExpenseItem
        key={index}
        date={item.date}
        description={item.description}
        price={item.price}
      />
    ));
  }

  return <div>{expensesItems}</div>;
}

export default ExpensesList;
