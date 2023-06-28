import React, { useEffect } from 'react';
import matchAudio from '../../assets/correct.mp3'
import noMatchAudio from '../../assets/incorrect.mp3'

const Modal = ({ onClose, children, isMatch }) => {
  useEffect(() => {
    if (isMatch) {
      const matchSound = new Audio(matchAudio);
      matchSound.play();
    } else {
      const noMatchSound = new Audio(noMatchAudio);
      noMatchSound.play();
    }
  }, [isMatch]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="max-w-xs w-full bg-gray-800 bg-opacity-75 p-4 rounded-lg">
        <div className="bg-white rounded-lg p-4">
          <div className="text-xl font-bold mb-4">Match Result</div>
          <div className="mb-4">{children}</div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
