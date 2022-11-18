import { useState } from 'react'
import { newuserform } from './NewUserForm.css'

const NewUserForm = (props) => {
    const [name, SetName] = useState('')
    const [age, SetAge] = useState(0)

    const testUserAdded = (event) => {
        event.preventDefault()

        if (name === '') {
            alert('Name not set!')
            return
        }

        if (age === '' || age < 0) {
            alert('Age too small!')
            return
        }

        const newUser = {
            name: name,
            age: age,
            id: Math.random().toString(),
        }
        props.onNewUserAdded(newUser)
        SetName('');
        SetAge(0);
    }

    const nameChangedHandler = (event) => {
        SetName(event.target.value)
    }

    const ageChangedHandler = (event) => {
        SetAge(event.target.value)
    }

    return (
        <div className="newuserform">
            <form onSubmit={testUserAdded}>
                <p>User name</p>
                <input
                    type="text"
                    value={name}
                    onChange={nameChangedHandler}
                ></input>
                <p>User age</p>
                <input
                    type="number"
                    value={age}
                    onChange={ageChangedHandler}
                ></input>
                <button type="submit">Add user test</button>
            </form>
        </div>
    )
}

export default NewUserForm
