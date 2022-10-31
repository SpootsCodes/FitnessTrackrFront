import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../api'
import './CSS/login.css';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
    const [ username, setUsername ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    let navigate = useNavigate();

    const handleOnChange = (event) =>{
        const changed = event.target.id
        if(changed === 'username'){
            setUsername(event.target.value)
        }
        else{
            setPassword(event.target.value)
        }
    }

    useEffect(() => {
      if(isLoggedIn) {
        navigate("/profile")
      }
    }, [isLoggedIn])

    const handleSubmit = async(event) => {
        event.preventDefault()        
        try {
          const result = await loginUser(username, password)
          localStorage.setItem("token",result.token)
          setIsLoggedIn(true)
          
        } catch (error) {
          alert(error)
        }

    }

  return (
    <div id="login">
      <h1 id="login-header">Login💪</h1>
      <form onSubmit={handleSubmit} id="login-form">
        <label id="user"></label>
        <input 
        type='text'
        id='username'
        onChange={handleOnChange}
         placeholder='Username'
         value={username}
         required></input>
        <label id="password"></label>
        <input 
        type='password'
        id='password'
        onChange={handleOnChange}
         placeholder='Password'
         value={password}
         required></input>
        <button type='submit' id="subBtn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
