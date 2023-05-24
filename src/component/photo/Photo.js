import React from 'react'

const Photo = (props) => {
    const { selectedImages } = props;
  return (
    <div>
      <h1>photo</h1>
      {/* {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))} */}
      {/* {selectedImages.map((image, index) => (
        <img key={index} src={require(`${image}`).default} alt={`Image ${index + 1}`} />
      ))} */}
      <img src={selectedImages}/>
    </div>
  )
}

export default Photo
