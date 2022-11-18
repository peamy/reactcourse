import './App.css'
import { useState } from 'react'
import UserOverview from './Components/OverView/UserOverview'
import NewUser from './Components/NewUser/NewUser'

function App() {
    const [users, SetUsers] = useState([
        { name: 'Dennis', age: 21, id:1234 },
        { name: 'Bob', age: 23, id:4567 },
    ])

    const NewUserAdded = (user) => {
        SetUsers((oldusers) => {
            return ([user, ...oldusers])
        })
    }

    return (
        <div className="App">
            <NewUser onNewUserAdded={NewUserAdded} />
            <UserOverview users={users} />
        </div>
    )
}

export default App
