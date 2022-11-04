import './ExpenseForm.css'
import {useState} from 'react';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    
    const[userInput, setUserInput] = useState({enteredTitle: '', enteredAmount: '', enteredDate: ''});

    const titleChangeHandler = event => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });
    }
    const amountChangedHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    }
    const dateChangedHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.00" step="0.01" onChange={amountChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
