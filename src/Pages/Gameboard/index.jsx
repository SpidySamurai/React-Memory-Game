import React, { useState, useEffect } from 'react';
import MemoryCard from '../../Components/MemoryCard';
import useMemoryGame from '../../hooks/useMemoryGame';
import tickingAudio from '../../assets/ticking.mp3';
import { useNavigate } from 'react-router-dom';
import Notification from '../../Components/Notification';

const GameBoard = () => {
  const [timer, setTimer] = useState(30);
  const { cards, handleSelectCard, isCardFlipped, showModal, setShowModal, setFlippedCards, isMatch, setIsMatch, gameCompleted } = useMemoryGame();
  const navigate = useNavigate();

  // Audio: Create once
  const audioRef = React.useRef(new Audio(tickingAudio));

  useEffect(() => {
    // Timer logic
    if (timer > 0 && !gameCompleted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 || gameCompleted) {
        // Navigate or End Game
        navigate('/result', { state: { isWinner: gameCompleted } });
    }
  }, [timer, gameCompleted, navigate]);

  useEffect(() => {
    // Sound logic separate/cleaner
    const audio = audioRef.current;
    if (timer <= 10 && timer > 0 && !gameCompleted) {
        audio.play().catch(e => console.log("Audio play failed", e));
    }
    return () => {
        audio.pause();
        audio.currentTime = 0;
    };
  }, [timer, gameCompleted]);

  const handleMatchModalClose = () => {
    setIsMatch(false);
    setShowModal(false);
    // If it was a mismatch, we might want to ensure cards are flipped back if not handled by auto-timeout
    // But hook handles it.
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <div className={`text-3xl sm:text-4xl font-bold mb-8 mt-4 transition-colors ${timer <= 10 ? 'text-red-500 animate-pulse' : 'text-gray-800'}`}>
        Remaining {timer} seconds
      </div>
      
      {/* Responsive Grid: 2 cols mobile, 4 cols tablet/desktop. 
          Added auto-rows-fr to ensure equal height if needed depending on card size */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 place-items-center mb-12 w-full max-w-4xl">
        {cards.map((card, index) => (
          <MemoryCard
            key={index}
            image={card.imgSource}
            text={card.cardType}
            isFlipped={isCardFlipped(index)}
            onHandleClick={() => handleSelectCard(index)}
          />
        ))}
      </div>
      
      {showModal && (
        <Notification 
          message="It's a Match!" 
          onClose={handleMatchModalClose} 
        />
      )}
    </div>
  );
};

export default GameBoard;
