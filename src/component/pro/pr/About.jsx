import React, { useState } from 'react';
import './ProfileForm.css';


const ProfileFormb = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [bio, setBio] = useState('');
  const [school, setSchool] = useState('');
  const [address, setAddress] = useState('');
  const [hobbies, setHobbies] = useState('');

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  return (
    <>

    <div className='profileDeatils'>
      <p>Intro</p>

      <label>
        Bio:{' '}
        {isEditMode ? (
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        ) : (
          <span>{bio}</span>
        )}
      </label>
      <br />

      <label>
        School:{' '}
        {isEditMode ? (
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        ) : (
          <span>{school}</span>
        )}
      </label>
      <br />

      <label>
        Address:{' '}
        {isEditMode ? (
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        ) : (
          <span>{address}</span>
        )}
      </label>
      <br />

      <label>
        Hobbies:{' '}
        {isEditMode ? (
          <input
            type="text"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        ) : (
          <span>{hobbies}</span>
        )}
      </label>
      <br />

      {isEditMode ? (
        <button onClick={handleSave} id='myBtnProfile'>Save</button>
      ) : (
        <button onClick={handleEdit} id='myBtnProfile'>Edit</button>
      )}


    </div>





      
      <br />

          </>
  );
};

export default ProfileFormb;
