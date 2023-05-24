import React, { useState } from 'react'
import Styles from "./navabar.module.css"
import trip from "../image/trip.svg"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import Musicpage from '../home/music/Musicpage';

const Navabar = () => {
  const [hide, setHide]=useState(false)
  const handlehide=()=>{
    setHide(true)
  }
  return (
    <div className={Styles.container}>
    <div className={Styles.up}>
        <div className={Styles.left}> 
        <Link to="/">
        <img width="80%" src={trip}/>
        </Link>
        </div>
        <div className={Styles.right}>
        {/* <GiHamburgerMenu onClick={handlehide} className={Styles.ham}/> */}
        {hide? null: <div>
              <h3 className={Styles.hide}>Review</h3>
                <h3 className={Styles.hide}>trips</h3>
                <h3 className={Styles.hide}>Alert</h3>
                <Link to="form"> <button className={Styles.btn}>Sign in</button></Link>
                {/* <Link to="api"> <button className={Styles.btn}>Details</button></Link> */}
               
               
                <h3 className={Styles.hide}>Basket</h3>
              </div> }
           
             
            
        </div>
    </div>
    <div className={Styles.down}>
    
    <Link  to="/"> <button className={Styles.butt}>Home</button> </Link>
    <button className={Styles.butt}>Destination</button>
    <Link to="/Advanture"> <button className={Styles.butt}>Adventure</button></Link>
    <Link to="/contact"><button className={Styles.butt}> Contact Us</button></Link>
    <Musicpage />

        
    </div>

    </div>
  )
}

export default Navabar