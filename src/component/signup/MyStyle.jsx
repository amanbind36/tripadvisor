import React,{useState} from 'react';

const MyStyle = () => {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmPass,setConfirmPAss]=useState('');
const [username,setUsername]=useState('');

const handleEmailChange=(event) =>{
    setEmail(event.target.value);
}

const handlePasswordChange=(event)=>{
    setPassword(event.target.value);
}

const handleUsernameChange=(event)=>{
    setUsername(event.target.value);
}

const handleConfirmPassChange=(event)=>{
    setConfirmPAss(event.target.value);
}
  return (
    <>
    <div className="container">
        
    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default MyStyle