import UserView from "./UserView"
import {useroverview} from './UserOverview.css'
import Card from "../UI/Card"

const UserOverview = (props) => {
  return(
  <Card className='useroverview'>
    <p>Users:</p>
    {props.users.map(user => <UserView key={user.id} name={user.name} age={user.age} />)}
  </Card>)
}

export default UserOverview