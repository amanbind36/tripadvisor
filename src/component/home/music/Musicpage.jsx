import React, { useState, useEffect, useRef } from 'react';
import './Musicpage.css';
import mymusic from './songgg.mp3';
//Music icons
import {GiSpeakerOff} from 'react-icons/gi'
import {GiSpeaker} from 'react-icons/gi'

const Musicpage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => { 
    const audio = audioRef.current;
    
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    if (audio.paused) {
      audio.addEventListener("canplaythrough", () => {
        audio.play();
        setIsPlaying(true);
      });
      audio.load();
    } else {
      setIsPlaying(true);
    }

    return () => {
      audio.removeEventListener("ended", () => {
        setIsPlaying(false);
      });
      audio.removeEventListener("canplaythrough", () => {
        audio.play();
        setIsPlaying(true);
      });
    };
  }, []);

  return (
    <>
      <div className="music-player">
        <button id='musicBtn' onClick={handlePlayPause}>
          {isPlaying ? <GiSpeakerOff size={30}id='misicIons' /> :<GiSpeaker size={30}id='misicIons' /> }
        </button>
      </div>
      <audio ref={audioRef} src={mymusic} />
    </>
  );
}

export default Musicpage;
