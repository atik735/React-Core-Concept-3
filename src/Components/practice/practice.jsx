import React, { useState } from 'react';

const Practice = () => {

    //simple form
    /*
    const handleSubmit =(e) =>{
        e.preventDefault();

        console.log("submited form");

        console.log(e.target.name.value);
        console.log(e.target.email.value);

    }
*/

        // Form Action er vitor kivabe handlere use kora control kora jai
/*
        const handleAction=(formData) =>{
            console.log(formData.get("name"));
            console.log(formData.get("email"));
            
        }
            */

        const [password,setPassword]=useState('')

        const [email,setEmail] = useState('');
        const [ name,setName] = useState('')
        const handleOnSubmit =(e) =>{
            e.preventDefault();
            console.log("submitted");
            
        }

            const handleSubmitOnChange =(e) =>{
                console.log(e.target.value);
                
            }

            const handleEmailOnchange=(e) =>{
                console.log(e.target.value);
                
            }

            const handleNameOnChange=(e)=>{
                console.log(e.target.value);
                
            }
    return (
        <div>
            
            <h3>simple form,form action control field practice</h3>

        {/* //SimpleForm kivabe onsubmit use kore form control kora jai */}

        {/* <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" required /><br />
            <input type="email" name="email" id="" required /><br />
            <input type="submit" value="Submit" />
        </form> */}

{/* -------------------------------------------- */}

            {/* form action er vitor handeler diye kivabe control kora jai */}
            {/* // 2. use form action and formData in the action handler. formData.get('name of the input field') */}
            {/* <form action={handleAction}>
                <input type="text" name="name" id=""  required/> <br />
                <input type="email" name="email" id="" required/> <br />
                <input type="submit" value="Submit" />
            </form> */}


{/* ----------------------------------------------------- */}

{/* get data when the user is type */}

                <form onSubmit={handleOnSubmit}>
                    <input type="text" name="name" required onChange={handleNameOnChange} defaultValue={name} placeholder='Name' id="" /> <br />
                    <input type="email" name="email" onChange={handleEmailOnchange} defaultValue={email} required placeholder='email' id="" /> <br />
                    <input type="password" name="password" onChange={handleSubmitOnChange} defaultValue={password} required placeholder='Password' id="" /> <br />
                    <input type="submit" value="Submit" />
                </form>

        </div>
    );
};

export default Practice;