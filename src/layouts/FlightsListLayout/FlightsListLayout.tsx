import React from 'react';

import styles from './FlightsListLayout.module.scss';

interface FlightsLayoutProps {
  children: React.ReactNode;
}
const FlightsListLayout: React.FC<FlightsLayoutProps> = ({ children }) => {
  return (
    <div className={styles.flightsListLayout}>
      <div className={styles.flightsListLayout__content}>{children}</div>
    </div>
  );
};

export default FlightsListLayout;
