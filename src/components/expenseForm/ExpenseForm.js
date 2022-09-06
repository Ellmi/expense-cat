import './ExpenseForm.css';

function ExpenseForm(props) {
  console.log('The expenseForm be executed.');
  const handleSummit = (event) => {
    event.preventDefault();
    const newDescription = document.querySelector('.title').value;
    const newPrice = document.querySelector('.amount').value;
    const newDate = document.querySelector('.date').value;

    if (newDescription && newPrice && newDate) {
      const dateValue = new Date(newDate);
      const newExpense = {
        description: newDescription,
        price: newPrice,
        date: {
          month: dateValue.toLocaleString('default', { month: 'long' }),
          year: dateValue.getFullYear(),
          day: dateValue.toLocaleString('default', { day: '2-digit' }),
        },
      };

      props.onSubmit(newExpense);
      document.querySelectorAll('input').forEach((it) => (it.value = ''));
    }
  };

  return (
    <form onSubmit={handleSummit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input id="title" className="title" type="text"></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input id="amount" className="amount" type="number"></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input id="date" className="date" type="date" min="2019-01-01"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
