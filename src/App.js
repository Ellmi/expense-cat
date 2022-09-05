import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

function App() {
  const data = [
    {
      description: 'House Issurance',
      price: '$700',
      date: {
        month: 'Decemeber',
        year: 2022,
        day: '01',
      },
    },
    {
      description: 'New Car',
      price: '$3000',
      date: {
        month: 'Decemeber',
        year: 2021,
        day: '01',
      },
    },
    {
      description: 'New TV',
      price: '$350',
      date: {
        month: 'Decemeber',
        year: 2020,
        day: '06',
      },
    },
  ];
  return (
    <div className="App">
      <NewExpense />
      <Expenses data={data} />
    </div>
  );
}

export default App;
