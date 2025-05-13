import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from './Header.module.scss';

const headerLinks = [
  { to: '/', label: 'Home', icon: <HomeIcon /> },
  { to: '/favorites', label: 'Favorites', icon: <FavoriteIcon /> },
  { to: '/cart', label: 'Cart', icon: <ShoppingCartIcon /> },
];

const Header: React.FC = () => {
  return (
    <Grid className={styles.header} container>
      {headerLinks.map(({ to, label, icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => (isActive ? `${styles.header__link} ${styles['header__link--active']}` : styles.header__link)}>
          {icon}
          <Grid>{label}</Grid>
        </NavLink>
      ))}
    </Grid>
  );
};

export default Header;
