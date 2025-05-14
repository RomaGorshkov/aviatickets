import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/shared/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import FavoriteTicketsPage from './pages/FavoriteTicketsPage/FavoriteTicketsPage';
import CartPage from './pages/CartPage/CartPage';
import TicketCardPage from './pages/TicketCardPage/TicketCardPage';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoriteTicketsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/flights/:id" element={<TicketCardPage />} />
      </Routes>
    </div>
  );
};

export default App;
