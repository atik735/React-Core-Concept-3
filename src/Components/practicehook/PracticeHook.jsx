import React, { useState } from 'react';
import useInputPractice from './useInputPractice';

const PracticeHook = () => {
    const [email,emailOnChange] = useInputPractice("");
    const [password,passwordOnChange] = useInputPractice("");
    const [error,setError] = useState('');
    const handleSubmit =(e) =>{
        e.preventDefault() ;
        console.log('submit',email,password);
        if (password.length <6) {
            setError("password must be 6 or more")
        }
        else{
            setError("")
        }
    }

    return (
        <div>
            <h3>Practice hook</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={emailOnChange} placeholder='email' required /> <br />
                <input type="password" name="password" onChange={passwordOnChange} placeholder='password' /><br />
                <input type="submit" value="Submit" />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default PracticeHook;