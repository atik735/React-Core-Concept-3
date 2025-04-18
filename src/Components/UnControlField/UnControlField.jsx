import React, { useRef } from 'react';

const UnControlField = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit =(e) =>{
        e.preventDefault();
        const Email= emailRef.current.value;
        const Password = passwordRef.current.value;

        console.log(Email,Password);
        
        
    }
    return (
        <div>
            <h3>Uncontroled field</h3>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" placeholder='Email'/> <br />
                <input ref={passwordRef} type="password" name="password" placeholder='Password'/> <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlField;