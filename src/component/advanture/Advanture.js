// import React, { useState } from 'react';

// const data = [
//   { id: 1, title: 'Post 1', content: 'Content 1' },
//   { id: 2, title: 'Post 2', content: 'Content 2' },
//   { id: 3, title: 'Post 3', content: 'Content 3' },
//   // Add more posts as needed
// ];

// const Advanture = () => {
//   return (
//     <div>
//       {data.map(post => (
//         <PostItem key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// const PostItem = ({ post }) => {
//   const [likes, setLikes] = useState(0);
//   const [whatsappShares, setWhatsAppShares] = useState(0);

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   const handleWhatsAppShare = () => {
//     setWhatsAppShares(whatsappShares + 1);
//   };

//   return (
//     <div>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//       <button onClick={handleLike}>Like ({likes})</button>
//       <button onClick={handleWhatsAppShare}>WhatsApp Share ({whatsappShares})</button>
//     </div>
//   );
// };

// export default Advanture;


// const data = [
//   { id: 1, title: 'Post 1', content: 'Content 1' },
//   { id: 2, title: 'Post 2', content: 'Content 2' },
//   { id: 3, title: 'Post 3', content: 'Content 3' },
//   // Add more posts as needed
// ];


// import React, { useState } from 'react';

// const Adventure = () => {
//   const [likes, setLikes] = useState(0);
//   const [isShareModalOpen, setIsShareModalOpen] = useState(false);

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   const handleShare = () => {
//     setIsShareModalOpen(true);
//   };

//   const handleCloseShareModal = () => {
//     setIsShareModalOpen(false);
//   };

//   const handleWhatsAppShare = () => {
//     const shareUrl = `whatsapp://send?text=Check out this post!`;
//     window.open(shareUrl);
//     handleCloseShareModal();
//   };

//   const handleInstagramShare = () => {
//     const shareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}`;
//     window.open(shareUrl);
//     handleCloseShareModal();
//   };

//   return (
//     <div>
//       <h3>Post Title</h3>
//       <p>Post content goes here...</p>
//       <button onClick={handleLike}>Like ({likes})</button>
//       <button onClick={handleShare}>Share</button>

//       {isShareModalOpen && (
//         <ShareModal
//           onWhatsAppShare={handleWhatsAppShare}
//           onInstagramShare={handleInstagramShare}
//           onClose={handleCloseShareModal}
//         />
//       )}
//     </div>
//   );
// };

// const ShareModal = ({ onWhatsAppShare, onInstagramShare, onClose }) => {
//   return (
//     <div className="modal">
//       <h3>Share Options</h3>
//       <button onClick={onWhatsAppShare}>Share on WhatsApp</button>
//       <button onClick={onInstagramShare}>Share on Instagram</button>
//       <button onClick={onClose}>Cancel</button>
//     </div>
//   );
// };

// export default Adventure;

import { FcLike } from 'react-icons/fc';
import { BsWhatsapp,BsInstagram } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { FaShareAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import Styles from "./advanture.module.css"
import i1 from "../image/andhra.jpg"
import i2 from "../images/wb1.jpg"
import i3 from "../images/wb2.jpg"
import i4 from "../images/wb3.jpg"
import i5 from "../images/assamBanner.jpg"
import i6 from "../images/assambanner.webp"
import i7 from "../images/odibanner.jpg"
import i8 from "../images/odibeach.jpg"
import i9 from "../images/templeAssam.jpg"

const postData = [
  {
    id: 1,
    title: 'Post 1',
    img:[i1],
    content: 'Jammu and Kasmir',
  },
  {
    id: 2,
    title: 'Post 2',
    img:[i2],
    content: 'West Bangole',
  },
  {
    id: 3,
    title: 'Post 2',
    img:[i3],
    content: 'Uttar Pradesh',
  },
  {
    id: 4,
    title: 'Post 2',
    img:[i4],
    content: 'Rajsthan',
  },
  {
    id: 1,
    title: 'Post 1',
    img:[i5],
    content: 'Jammu and Kasmir',
  },
  {
    id: 2,
    title: 'Post 2',
    img:[i6],
    content: 'West Bangole',
  },
  {
    id: 3,
    title: 'Post 2',
    img:[i7],
    content: 'Uttar Pradesh',
  },
  {
    id: 4,
    title: 'Post 2',
    img:[i8],
    content: 'Rajsthan',
  },
  {
    id: 4,
    title: 'Post 2',
    img:[i9],
    content: 'Rajsthan',
  },
  // Add more post data objects as needed
];

const PostItem = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  const handleWhatsAppShare = () => {
    const shareUrl = `whatsapp://send?text=Check out this post!`;
    window.open(shareUrl);
    handleCloseShareModal();
  };

  const handleInstagramShare = () => {
    const shareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl);
    handleCloseShareModal();
  };

  return (
    <div>
    <div className={Styles.container}>
    <div>
    <img width="300px" height="300px" src={post.img}/>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={handleLike}><FcLike/> ({likes})</button>
      <button onClick={handleShare}><FaShareAlt/></button>
    </div>

</div>
      {isShareModalOpen && (
        <ShareModal
          onWhatsAppShare={handleWhatsAppShare}
          onInstagramShare={handleInstagramShare}
          onClose={handleCloseShareModal}
        />
      )}
    </div>
  );
};

const ShareModal = ({ onWhatsAppShare, onInstagramShare, onClose }) => {
  return (
    <div className="modal">
      <h3>Share Options</h3>
      <button onClick={onWhatsAppShare}><BsWhatsapp/></button>
      <button onClick={onInstagramShare}><BsInstagram/></button>
      <button onClick={onClose}><GiCancel/></button>
    </div>
  );
};

const Advanture = () => {
  return (
    <div className={Styles.main}>
      {postData.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Advanture;
