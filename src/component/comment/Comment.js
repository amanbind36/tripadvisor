import React, { useState } from 'react';

// const Photo = () => {
//   const [likes, setLikes] = useState(0);
//   const [comments, setComments] = useState([]);
//   const [shareUrl, setShareUrl] = useState('');
//   const [commentInput, setCommentInput] = useState('');

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   const handleComment = () => {
//     if (commentInput) {
//       setComments([...comments, commentInput]);
//       setCommentInput('');
//     }
//   };

//   const handleShare = () => {
//     // Generate and set the share URL
//     const photoUrl = 'https://example.com/photo'; // Replace with the actual photo URL
//     const shareUrl = `whatsapp://send?text=Check out this photo: ${encodeURIComponent(photoUrl)}`;
//     setShareUrl(shareUrl);
//   };

//   return (
    
//     <div>
//       <img src="path_to_photo.jpg" alt="Photo" />

//       <div>
//         <button onClick={handleLike}>Like</button>
//         <span>{likes} Likes</span>
//       </div>

//       <div>
//         <input
//           type="text"
//           placeholder="Add a comment..."
//           value={commentInput}
//           onChange={(e) => setCommentInput(e.target.value)}
//         />
//         <button onClick={handleComment}>Comment</button>
//         {comments.length > 0 && (
//           <div>
//             <h4>Comments:</h4>
//             {comments.map((comment, index) => (
//               <p key={index}>{comment}</p>
//             ))}
//           </div>
//         )}
//       </div>

//       <div>
//         <button onClick={handleShare}>Share on WhatsApp</button>
//         {shareUrl && (
//           <a href={shareUrl} target="_blank" rel="noopener noreferrer">
//             Share on WhatsApp
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Photo;
import { FcLike } from 'react-icons/fc';
import { BsWhatsapp,BsInstagram } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { FaShareAlt } from 'react-icons/fa';
import Styles from "./comment.module.css"

const Photo = ( ) => {
    const [likes, setLikes] = useState(0);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');
    const [commentModel,setCommentModel]=useState(false)
    const handleLike = () => {
      setLikes(likes + 1);
    };
    const handleComment = () => {
    if (commentInput) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }

  };
  const handleCommentshow=()=>{

    setCommentModel(true)

  }
  const handleCommentclose=()=>{

    setCommentModel(false)

  }
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
      <div >
      <div>
   
   


   
        <button onClick={handleLike}><FcLike/> ({likes})</button>
        <button onClick={handleCommentshow}>Comment</button>
        <button onClick={handleShare}><FaShareAlt/></button>
      </div>
  
  </div>
  {commentModel &&(
    <div>
        <input
         type="text"
          placeholder="Add a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button onClick={handleComment}>Comment</button>
        <button onClick={handleCommentclose}><GiCancel/></button>
        {comments.length > 0 && (
          <div>
            <h4>Comments:</h4>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        )}
    </div>
  )}
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
  export default Photo;