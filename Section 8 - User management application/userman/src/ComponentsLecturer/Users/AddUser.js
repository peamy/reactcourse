import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
    const [enteredUserName, SetEnteredUserName] = useState('')
    const [enteredAge, SetEnteredAge] = useState('')
    const [currentError, SetErrorMessage] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUserName.trim().length === 0) {
            SetErrorMessage({
                message: 'Please enter a valid Name',
                title: 'Invalid name',
            })
            return
        }
        if (enteredAge.trim().length === 0 || +enteredAge < 1) {
            SetErrorMessage({
                message: 'Please enter a valid age',
                title: 'Invalid age',
            })
            return
        }

        console.log(enteredUserName + ' ' + enteredAge)
        SetEnteredAge('')
        SetEnteredUserName('')

        props.onUserAdded(enteredUserName, enteredAge)
    }

    const ResetError = () => {
        SetErrorMessage()
    }

    const userNameChangedHandler = (event) => {
        SetEnteredUserName(event.target.value)
    }

    const ageChangedHandler = (event) => {
        SetEnteredAge(event.target.value)
    }

    return (
        <div>
            {currentError && (
                <ErrorModal
                    title={currentError.title}
                    message={currentError.message}
                    onPressOkay={ResetError}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User name</label>
                    <input
                        id="username"
                        value={enteredUserName}
                        onChange={userNameChangedHandler}
                        type="text"
                    ></input>

                    <label htmlFor="age">Age(years)</label>
                    <input
                        id="age"
                        value={enteredAge}
                        onChange={ageChangedHandler}
                        type="number"
                    ></input>

                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
