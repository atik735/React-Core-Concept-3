//controlled component.one per each field. use state on change of the field.useful to dynamically handle error

import React, { useState } from 'react';

const ControlField = () => {
    const [password,setPassword]=useState('');
    const [error,setError]=useState('')
    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log("Submited");

        if (password.length <6) {
            setError('Password must be 6 charecter or more and this symbol must be here')
        }
        else{
            setError(" ")
        }
        
    }
    const handlePasswordOnChange = (e) =>{
        // console.log(e.target.value);
        setPassword(e.target.value);
        //   if (password.length <6) {
        //         setError('Password Must be 6 charecter or more')
        //     }
        //     else{
        //         setError(" ")
        //     }
    }
    
    return (
        <div>
            <h3>Control Field</h3>
            <p>your password:{password}</p>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" required placeholder='Email' />
            <br />
            <input type="password" name="password" defaultValue={password} onChange={handlePasswordOnChange} required placeholder='Password' /><br />
            <input type="submit" value="Submit" />
        </form>
        <p>{error}</p>
    </div>
    );
};

export default ControlField;