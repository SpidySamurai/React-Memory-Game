import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // If location.state is undefined, navigate back to the gameboard after the component has mounted
        if (!location.state) {
          navigate('/gameboard');
        }
      }, [location.state, navigate]);
    
    const isWinner = location.state?.isWinner;
    const handlePlayAgain = () => {
        navigate('/gameboard');
    };
    const handleBackHome = () => {
        navigate('/')
    }

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold mb-8">{isWinner ? 'You did it! You are a WINNER!' : 'Oops you did not find them all! :c'}</h1>
            <div className='flex flex-row gap-4'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:animate-bounce" onClick={handleBackHome}>Back to home</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:animate-bounce" onClick={handlePlayAgain}>Play again?</button>
            </div>
        </div>
    );
};

export default Result;
