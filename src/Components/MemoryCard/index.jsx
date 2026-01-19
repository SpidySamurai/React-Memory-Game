import React, { useState } from 'react';
import './MemoryCard.css'

const MemoryCard = ({ image, text, isFlipped, onHandleClick }) => {

  const handleCardClick = () => {
    if (!isFlipped) {
      onHandleClick();
    }
  };

  return (
    <div 
      className={`w-full aspect-[2/3] max-w-[150px] bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500`} 
      onClick={handleCardClick}
    >
      <div className={`card-inner ${!isFlipped ? 'animation-flip' : ''} w-full h-full relative`}>
        {/* Front Face (Image) */}
        <div className={`w-full h-full absolute inset-0 flex flex-col items-center justify-center rounded-lg card-front backface-hidden`}>
          <img src={image} alt="Card Front" className="w-2/3 h-2/3 object-contain rounded-lg" />
          <p className="pt-2 text-center text-sm sm:text-base font-medium">{text}</p>
        </div>
        
        {/* Back Face (Question Mark) */}
        <div className={`w-full h-full absolute inset-0 flex items-center justify-center rounded-lg card-back backface-hidden`}>
          <p className="text-4xl sm:text-6xl font-bold text-yellow-500">?</p>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
