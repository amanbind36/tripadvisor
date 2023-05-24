import React,{useState} from 'react';
import './Login.css';

const Login = () => {
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');

const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange =(event) =>{
    setPassword(event.target.value);
  }
  return (
    <>
    <div className="loginContainer">
        <p id='login'>Log in </p>
        <input type="text" placeholder='Username' id='username'  value={username}
          onChange={handleUsernameChange} /><br/>
        <input type="password" placeholder='Password' id='password' value={password} onChange={handlePasswordChange} /><br/>
        <button id='logBtn'>Log In</button>
        <p>Forgot password?</p>
    </div>
    
    
    
    
    </>
  )
}

export default Login