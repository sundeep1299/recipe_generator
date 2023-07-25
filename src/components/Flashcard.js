import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Flashcard.css';

const Flashcard = ({ word, translation, audioUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAudio = () => {
    const audio = new Audio(audioUrl);
    audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
        <div className="front">
          <div>{word}</div>
          <button onClick={handleAudio}>Play Audio</button>
        </div>
        <div className="back">{translation}</div>
      </div>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Flashcard;
