import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js'
import { useState } from 'react'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataSaveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onExpenseAdded(expenseData)
        setIsEditing(false)
    }

    const startEditing = () => {
        setIsEditing(true)
    }

    const stopEditing = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>Create new expense</button>}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataSaveHandler}
                    onCancel={stopEditing}
                />
            )}
        </div>
    )
}

export default NewExpense
