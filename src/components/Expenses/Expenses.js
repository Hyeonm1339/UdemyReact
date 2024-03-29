import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesList from './ExpensesList'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (seletedYear) => {
    setFilteredYear(seletedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
