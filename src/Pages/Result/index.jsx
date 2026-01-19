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
        <div className="h-full flex flex-col items-center justify-center min-h-[50vh]">
            <h1 className="text-4xl sm:text-6xl text-center font-bold mb-12 text-gray-800">
                {isWinner ? '🎉 You Won! 🎉' : 'Game Over'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                {isWinner ? 'Great memory skills!' : 'Don\'t give up, try again!'}
            </p>
            <div className='flex flex-col sm:flex-row gap-6 w-full max-w-sm px-4'>
                <button 
                    className="flex-1 bg-gray-500 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-600 transition-colors transform hover:scale-105" 
                    onClick={handleBackHome}
                >
                    Back to Home
                </button>
                <button 
                    className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-green-600 transition-colors transform hover:scale-105" 
                    onClick={handlePlayAgain}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default Result;
