import Card from '../UI/Card'
import NewUserForm from './NewUserForm'
import { newuser } from './NewUser.css'

const NewUser = (props) => {
    return (
        <Card className="newuser">
            Add new user!
            <NewUserForm onNewUserAdded={props.onNewUserAdded} />
        </Card>
    )
}

export default NewUser
