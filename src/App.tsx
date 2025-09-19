import React from 'react';

import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Rick and Morty - CI/CD practice webapp</h1>
        <h2 className="text-lg font-bold text-center">Deployed with Netlify</h2>
        <h2 className="text-lg font-bold text-center">Deployed with Vercel test</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
