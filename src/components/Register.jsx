import React from "react";
import {registerUser} from '../api'
import './CSS/register.css';



const Register = () => {

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const result = await registerUser(event)
    if(result.error){
      alert(result.error)
    }
    }

    
    return (
        <div id="register">
          <form onSubmit={handleSubmit} id= 'register-form'>
            <h3 id="register-header"> Sign up 🏋️‍♀️</h3>
            <label></label>
            <input type='text' id='username' required placeholder='Create Username'></input>
            <label></label>
            <input type='password' id='password' required placeholder='Create Password'></input>
            <button type='submit' id="submitBtn">Submit</button>
          </form>
        </div>
      );
}
 
export default Register;