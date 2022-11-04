import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
    const [filteredYear, SetYear] = useState('2020')
    const onSelectedYearChanged = (selectedYear) => {
        SetYear(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onYearChanged={onSelectedYearChanged} />
            {props.items.map((item) => (
                <ExpenseItem
                    key={item.id}
                    date={item.date}
                    amount={item.amount}
                    title={item.title}
                />
            ))}
        </Card>
    )
}

export default Expenses
