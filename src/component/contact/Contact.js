import React from 'react'
import Styles from "./contact.module.css"
import { useState } from 'react';
import axios from 'axios';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');

  const [mobile, setMobile] = useState('');

  const [last, setLast] = useState('');


  const handleSubmit =async(e)=>{
       e.preventDefault();
       
      const { data}= await axios.post(`http://35.78.201.111:3008/support/add`,{name,email,message,mobile})

      console.log(data)
  }

  return (
    <>
    

    <div className={Styles.contain}>
    <form>

    <div className={Styles.main}>
        <h1>Let's Get in Touch</h1>
        <div className={Styles.linea}></div>
        <p>Fill out the form below, and we'll be in touch shortly</p>
        <div className={Styles.inp}>
        <div>
        <label>FIRST NAME</label>
        <br/>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}  />
        </div>
        <div>
        <label>LAST NAME</label>
      <br/>
      <input type='text' value={last} onChange={(e)=>setLast(e.target.value)} />
        </div>
      
     
        </div>


        <div className={Styles.inp}>
        <div>
        <label>EMAIL ADDRESS</label>
        <br/>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
        <label>PHONE NUMBER</label>
      <br/>
      <input type='text' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
        </div>
      
     
        </div>
        <br/>
        <br/>
        <label>QUESTION OR COMMENTS</label>
        <br/>
      <textarea value={message} onChange={(e)=>setMessage(e.target.value)}  className={Styles.text}></textarea>
     <br/>
     <br/>
      <button onClick={handleSubmit} className={Styles.btn}>Submit</button>
    </div>

    </form>
    </div>
    </>
  )
}

export default Contact