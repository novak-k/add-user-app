import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
   const nameInputRef = useRef();
   const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        // console.log(nameInputRef);
        // console.log(nameInputRef.current.value);
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                massage: 'Please enter valid name and age (non-empty values)'
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                massage: 'Please enter valid age (> 0)'
            })
            return;
        }
        // console.log(enteredUsername, enteredAge);

        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        
        // setEnteredUsername('');
        // setEnteredAge('');
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };


    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error &&
                <ErrorModal
                    title={error.title}
                    massage={error.massage}
                    onConfirm={errorHandler}
                />}
            <Card styleName={style.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User name</label>
                    <input
                        id='username'
                        type='text'
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input
                        id='age'
                        type='number'
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>

    )
};

export default AddUser;