import React, { useState, useEffect } from 'react';
import MemoryCard from '../../Components/MemoryCard';
import useMemoryGame from '../../hooks/useMemoryGame';
import tickingAudio from '../../assets/ticking.mp3';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Components/Modal';

const GameBoard = () => {
  const [timer, setTimer] = useState(30);
  const { cards, handleSelectCard, isCardFlipped, showModal, setShowModal,setFlippedCards, isMatch, setIsMatch, gameCompleted } =
    useMemoryGame();
  const navigate = useNavigate();

  const audio = new Audio(tickingAudio);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer <= 10) {
      audio.play();
    }

    if (timer === 0 || gameCompleted) {
      clearInterval(interval);
      navigate('/result', { state: { isWinner: gameCompleted } });
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleMatchModalClose = () => {
    setIsMatch(false);
    setShowModal(false);
    setFlippedCards([]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3xl sm:text-4xl font-bold mb-8 mt-4">Remaining {timer} seconds</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center mb-12">
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
        <Modal onClose={handleMatchModalClose} isMatch={isMatch}>
          {isMatch ? <p>Nice! It's a match!</p> : <p>Sorry, but this is not a match.</p>}
        </Modal>
      )}
    </div>
  );
};

export default GameBoard;
