import React from 'react'
// import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import { Post } from './Post';
// import About from './About';
import {Link} from "react-router-dom"
// import ProfileForm from './ProfileForm';

const Profilea = () => {
  return (
    <>
    {/* <BrowserRouter>
    <ProfileForm/>
    <Routes>
        <Route path='/' element={<Post/>} />
        <Route path='/about' element={<About/>} />
        


    </Routes>
    </BrowserRouter> */}
    <Link to="/post">
    <h3>post</h3>
    </Link>
   <Link to="/profileform">
   <h3>about</h3>
   </Link>
    
    
    
    
    </>
  )
}

export default Profilea