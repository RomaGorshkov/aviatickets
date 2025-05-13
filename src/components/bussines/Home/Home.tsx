import React from 'react';
import { Grid } from '@mui/material';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <Grid className={styles.home}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
    </Grid>
  );
};

export default Home;
