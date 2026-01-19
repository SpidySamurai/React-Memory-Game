import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const HomePage = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-5xl font-semibold animate-slideDown">
                Memory Card Game{' '}
                <img className="inline-block w-16" src={logo} alt="Logo" />
            </h1>

            <p className="text-xl text-gray-600 mt-4">Test your memory and have fun!</p>
            <Link
                to="/gameboard"
                className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-white bg-green-500 rounded hover:bg-green-600 animate-slideUp transition-transform transform hover:scale-105"
            >
                Start Game
            </Link>
        </div>
    );
};

export default HomePage;