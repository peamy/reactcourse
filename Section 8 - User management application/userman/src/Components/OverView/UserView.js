import {userview} from './UserView.css'
import Card from '../UI/Card'

const UserView = (props) => {
  return(<Card className='userview'>
    <div>{props.name} ({props.age} years old)</div>
  </Card>)
}

export default UserView;