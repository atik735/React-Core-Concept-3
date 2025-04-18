// 1.e.target.[name of the input field].value

import React from 'react';

const SimpleForm = () => {
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);    
      }
    return (
        <div>
        <h3>Simple Form</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" name='name'  /> <br />
      <input type="email" name='email'  />
      <br />
      <input type="submit" value="Submit" />
    </form>
        </div>
    );
};

export default SimpleForm;