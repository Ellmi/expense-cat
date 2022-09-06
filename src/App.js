import { useState } from 'react';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

function App() {
  console.log('The app be executed.');
  const data = [
    {
      description: 'House Issurance',
      price: '700',
      date: {
        month: 'Decemeber',
        year: '2022',
        day: '01',
      },
    },
    {
      description: 'New Car',
      price: '3000',
      date: {
        month: 'Decemeber',
        year: '2021',
        day: '01',
      },
    },
    {
      description: 'New TV',
      price: '350',
      date: {
        month: 'Decemeber',
        year: '2020',
        day: '06',
      },
    },
  ];
  const [expenses, setExpenses] = useState(data);
  const addNewExpense = (newExpense) => {
    setExpenses((expenses) => [...expenses, newExpense]);
  };

  return (
    <div className="App">
      <NewExpense onAddNew={addNewExpense} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
