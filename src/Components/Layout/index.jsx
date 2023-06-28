import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SoundComponent from '../SoundComponent';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  const isGameboard = location.pathname === '/gameboard';

  return (
    <div className="flex flex-col min-h-screen">
      <div className={`flex ${isGameboard ? 'justify-between' : 'justify-end'} bg-gray-100`}>
        {isGameboard && (
          <button className='ml-6 text-2xl font-bold' onClick={handleGoBack}>Back</button>
        )}
        <SoundComponent />
      </div>
      <div className={`${isGameboard ? '' : 'h-0'} flex-grow`}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;