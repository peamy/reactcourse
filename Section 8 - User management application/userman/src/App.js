import './App.css'
import { useState } from 'react'
import UserOverview from './Components/OverView/UserOverview'
import NewUser from './Components/NewUser/NewUser'
import AddUser from './ComponentsLecturer/Users/AddUser'
import UsersList from './ComponentsLecturer/Users/UsersList'

export function App() {
    const [users, SetUsers] = useState([
        { name: 'Dennis', age: 21, id: 1234 },
        { name: 'Bob', age: 23, id: 4567 },
    ])

    const addUserHandler = (uName, uAge) => {
        SetUsers((oldusers) => {
            return [
                ...oldusers,
                { name: uName, age: uAge, id: Math.random(10000) },
            ]
        })
    }

    return (
        <div>
            <AddUser onUserAdded={addUserHandler} />

            <UsersList users={users} />
        </div>
    )
}

export function MyApp() {
    const [users, SetUsers] = useState([
        { name: 'Dennis', age: 21, id: 1234 },
        { name: 'Bob', age: 23, id: 4567 },
    ])

    const NewUserAdded = (user) => {
        SetUsers((oldusers) => {
            return [user, ...oldusers]
        })
    }

    return (
        <div className="App">
            <NewUser onNewUserAdded={NewUserAdded} />
            <UserOverview users={users} />
        </div>
    )
}
