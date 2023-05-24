import React, { useState } from 'react';
import Comment from '../comment/Comment';
import Styles from './profile.module.css'
import Photo from '../photo/Photo';
const Profile = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [showPostedContent, setShowPostedContent] = useState(false);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);

    files.forEach((file) => {
      if (file.type.startsWith('image/')) {
        setSelectedImages((prevSelectedImages) => [...prevSelectedImages, file]);
      } else if (file.type.startsWith('video/')) {
        setSelectedVideos((prevSelectedVideos) => [...prevSelectedVideos, file]);
      }
    });
  };

  const handlePost = () => {
    setShowPostedContent(true);
  };

  return (
    <>
    <div>
    <h1>Profile</h1>
    
    <button>Log Out</button>
   
   <label>Add photo or Video</label>
      <input className={Styles.inp} type="file" multiple onChange={handleFileSelect} placeholder='Add Photo and Video' />
      
      <button className={Styles.btn} onClick={handlePost}>Post</button>




      {showPostedContent ? (
        <>
          {selectedImages.length > 0 && (
            <div>
              <h2>Selected Images</h2>
              {selectedImages.map((image, index) => (
                <div key={index}>
                  <img width="400px" height="300px" src={URL.createObjectURL(image)} alt={`Selected Image ${index}`} />
                <Comment/>

                </div>
              ))}
            </div>
          )}

          {selectedVideos.length > 0 && (
            <div>
              <h2>Selected Videos</h2>
              {selectedVideos.map((video, index) => (
                <div key={index}>
                  <video controls>
                    <source  width="400px" height="300px" src={URL.createObjectURL(video)} type={video.type} />
                    Your browser does not support the video tag.
                  </video>
                  <Comment/>
                </div>
              ))}
            </div>
          )}
        </>
      ):null}
      <div>
      <Photo selectedImages={selectedImages} />
      </div>
     
    </div>
    </>
  );
};

export default Profile;
