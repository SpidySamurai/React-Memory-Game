import React, { useState } from 'react';
import './MemoryCard.css'

const MemoryCard = ({ image, text, isFlipped, onHandleClick }) => {

  const handleCardClick = () => {
    if (!isFlipped) {
      onHandleClick();
    }
  };

  return (
    <div className={`w-24 h-36 sm:w-40 sm:h-64 lg:w-48 lg:h-72 bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500`} onClick={handleCardClick}>
      <div className={`card-inner ${!isFlipped ? 'animation-flip' : ''}`}>
        <div className={`w-full h-full flex flex-col items-center justify-center rounded-lg card-front`}>
          <img src={image} alt="Card Front" className="w-16 h-16 sm:w-32 sm:h-32 rounded-lg" />
          <p className="pt-6 text-center">{text}</p>
        </div>
        <div className={`w-full h-full flex items-center justify-center rounded-lg card-back`}>
          <p className="text-9xl text-yellow-500 font-bold">?</p>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
