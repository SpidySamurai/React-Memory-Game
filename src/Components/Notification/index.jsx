import React, { useEffect } from 'react';
import matchAudio from '../../assets/correct.mp3';

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const audio = new Audio(matchAudio);
    audio.play().catch(e => console.log("Audio play failed", e));
    
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // Auto-close after 2 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown">
      <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
        <span className="text-xl">✨</span>
        <span className="font-bold text-lg">{message}</span>
      </div>
    </div>
  );
};

export default Notification;
