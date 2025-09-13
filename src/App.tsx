import React from 'react';
import { Link } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Rick and Morty - CI/CD practive webapp</h1>
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
        <Link to="/contact" className="text-blue-500">Contact</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
