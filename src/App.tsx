import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/shared/Header/Header';
import HomePage from './pages/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
