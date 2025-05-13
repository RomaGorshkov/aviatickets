import React from 'react';
import { Grid } from '@mui/material';

import styles from './TicketCard.module.scss';

const TicketCard: React.FC = () => {
  return (
    <Grid className={styles.ticketCard}>
      <h2>Ticket Card</h2>
      <p>This is the ticket card component.</p>
    </Grid>
  );
};

export default TicketCard;
