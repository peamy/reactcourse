import { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [filteredYear, SetYear] = useState('2020')

    const onSelectedYearChanged = (selectedYear) => {
        SetYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onYearChanged={onSelectedYearChanged}
            />

            <ExpensesChart expenses={filteredExpenses} />

            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses
