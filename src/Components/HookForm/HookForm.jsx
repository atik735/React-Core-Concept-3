import React, { useState } from 'react';
import useInputField from './useInputField';

const HookForm = () => {
    const [email,handleNameOnChange] = useInputField('')
    const [password,handlePasswordOnChange] = useInputField('')
    const [error,setError] = useState('');

    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log("Submit",email,password);
        if (password.length <6) {
            setError("password must be 6 or more")
        }
        else{
            setError("")
    }
}
    return (
        <div>
            <h3>Hook form</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" defaultValue={email} onChange={handleNameOnChange} name="email" placeholder='email' required/><br />
                <input type="password"  name="password" defaultValue={password} onChange={handlePasswordOnChange} placeholder='Password' required/> <br />
                <input type="submit" value="Submit" />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default HookForm;