import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../store/storeHooks';
import { fetchTicket } from '../../../store/slices/ticketSlice';
import { formatDate, formatTime } from '../../../utils';
import { toggleCartItem } from '../../../store/reducers/flights';
import Preloader from '../../shared/Preloader/Preloader';

import styles from './TicketCard.module.scss';

const TicketCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { cartFlights } = useAppSelector((state) => state.flights);

  const { ticket, isLoading } = useAppSelector((state) => state.ticket);

  const isCartItem = React.useMemo(() => {
    return cartFlights.some((item) => item.id === id);
  }, [cartFlights, id]);

  const handleToggleCart = () => {
    dispatch(toggleCartItem(ticket));
  };

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTicket(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <Preloader />;

  return (
    <div className={styles.ticketCard}>
      {!ticket ? (
        <h2>This ticket is not found.</h2>
      ) : (
        <div className={styles.ticketCard__content}>
          <div className={styles.ticketCard__contentHeader}>
            <div>
              <h3 className={styles.ticketCard__contentPrice}>${ticket?.price}</h3>
              <p>
                {ticket?.tickets.remaining} of {ticket?.tickets.total} tickets left
              </p>
            </div>
            <h3>{ticket?.airline}</h3>
          </div>
          <div className={styles.ticketCard__contentInfo}>
            <div className={styles.ticketCard__contentDeparture}>
              <div className={styles.ticketCard__contentTime}>{formatTime(ticket?.departureTime || '')}</div>
              <div className={styles.ticketCard__contentDate}>{formatDate(ticket?.departureTime || '')}</div>
            </div>
            <div className={styles.ticketCard__contentRoad}>
              {ticket?.from} → {ticket?.to}
            </div>
            <div className={styles.ticketCard__contentArrival}>
              <div className={styles.ticketCard__contentTime}>{formatTime(ticket?.arrivalTime || '')}</div>
              <div className={styles.ticketCard__contentDate}>{formatDate(ticket?.arrivalTime || '')}</div>
            </div>
          </div>
          <div className={styles.ticketCard__contentTicketBuy}>
            <div>
              Terminal: {ticket?.terminal} | Gate: {ticket?.gate}
            </div>
            <button onClick={handleToggleCart}>{isCartItem ? 'Remove from cart' : 'Add to cart'}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketCard;
