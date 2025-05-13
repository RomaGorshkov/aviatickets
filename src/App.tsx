import { Grid } from '@mui/material';
import React from 'react';
import Header from './components/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Grid>
  );
};

export default App;
