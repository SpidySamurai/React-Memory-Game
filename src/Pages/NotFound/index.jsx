import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="text-center">
        <div className="text-9xl font-bold text-red-500">404</div>
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-xl text-gray-600 mt-4">We are sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
