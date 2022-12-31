import logo from './logo.svg'
import './App.css'
import ExpenseItem from './Components/ExpenseItem'
const expenses = [
  {
    ItemName: 'Milk',
    ItemDate: new Date().toISOString().slice(0, 10),
    Cost: 30,
  },
  {
    ItemName: 'Buiscuits',
    ItemDate: new Date().toISOString().slice(0, 10),
    Cost: 180,
  },
];

function App() {
  return (
    <div>
      {expenses.map(function (item) {
        return <ExpenseItem items={item} />
      })}
    </div>
  )
}

export default App
