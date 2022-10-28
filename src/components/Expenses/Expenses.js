import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
    return (
    <Card className="expenses">
        {props.items.map((item) => <ExpenseItem date={item.date} amount={item.amount} title={item.title}/>)}
    </Card>)
}

export default Expenses;