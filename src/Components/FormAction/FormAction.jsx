// 2. use form action and formData in the action handler. formData.get('name of the input field')

import React from 'react';

const FormAction = () => {
    const handleAction = (formData) =>{
        console.log(formData.get("name"));
        console.log(formData.get("email"));
        
    }
    return (
        <>
        <h3>FormAction</h3>
        <form action={handleAction}>
            <input type="text" name="name" id="" placeholder='Name' /> <br />
            <input type="email" name="email" placeholder='Email' id="" /> <br />
            <input type="submit" value="Submit" />
        </form>
      </>

    );
};

export default FormAction;