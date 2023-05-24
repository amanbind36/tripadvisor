import React, { useState } from 'react';
import './ProfileForm.css';

import ProfileFormb from './About';
import Profile from '../../Profile/Profile';
import Photo from '../../photo/Photo';
import img from "../../image/andhra.jpg"

import profilepic from './Img/20211115_155259.jpg';
import profileCover from './Img/neven-krcmarek-V4EOZj7g1gw-unsplash.jpg';
import { Link } from 'react-router-dom';

const ProfileForm = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('');
  const [Pname, setPName] = useState('');
  const [show,setShow] =useState(false)

  const handleabout=()=>{
setShow(true)
  }

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  return (
    <>
      <div className='coverImages'>
    <img src={profileCover} id='coverImages' />
   </div>

   <div className='profile'>
   <div>
   <img src={img} id='proImages' />
   </div>
   
    <div id='NamePostion'>
   <label id='Profilename'>
   <br/>
        {' '}
        {isEditMode ? (
          <input
            type="text"
            value={name}
            placeholder=' Name'
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <span>{name}</span>
        )}
      </label>
      <br/>

      <label id='ProfilePname'>
        {' '}
        {isEditMode ? (
          <input
            type="text"
            value={Pname}
            placeholder='Nick Name'
            onChange={(e) => setPName(e.target.value)}
          />
        ) : (
          <span>{Pname}</span>
        )}
        <br/>
      </label> &nbsp; &nbsp;
      {isEditMode ? (
        <button id="myBtnProfile" onClick={handleSave} >Save</button>
      ) : (
        <button id="myBtnProfile" onClick={handleEdit}>Edit</button>
      )}

      </div>
   </div>

   <div className='ProfileNavbar' >
    <li><Link to='/post' style={{textDecoration:'none'}}>Post</Link></li>
    <li onClick={handleabout}>About</li>
    <li><Link to='/photo'style={{textDecoration:'none'}}>Photos</Link></li>
    <li><Link to='/video'style={{textDecoration:'none'}}>Videos</Link></li>

   </div>
   <div className='about'>
   <div> {show ?<Photo/>:<ProfileFormb/> }</div>
  <div><Profile/></div>
    
   </div>


          </>
  );
};

export default ProfileForm;
