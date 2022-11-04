import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js';

const NewExpense = (props) => {

    const saveExpenseDataSaveHandler = (enteredExpenseData) => {
        const expenseData = {...enteredExpenseData, id: Math.random().toString()};
        props.onExpenseAdded(expenseData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataSaveHandler} />
        </div>
    )
}

export default NewExpense;