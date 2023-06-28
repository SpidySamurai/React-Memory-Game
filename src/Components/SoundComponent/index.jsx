import React, { useState } from 'react';
import muteIcon from '../../assets/sound--on.svg';
import unmuteIcon from '../../assets/sound--off.svg';
import soundFile from '../../assets/background.mp3';

const SoundComponent = () => {
  const [isMuted, setIsMuted] = useState(true); //Starts on mute due audio plays politics
  const audioRef = React.useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className='mr-6'>
      <button onClick={toggleMute}>
        {isMuted ? <img className='w-12' src={unmuteIcon} alt="Unmute" /> : <img className='w-12' src={muteIcon} alt="Mute" />}
      </button>
      {!isMuted && (
        <audio ref={audioRef} autoPlay loop>
          <source src={soundFile} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
};

export default SoundComponent;
