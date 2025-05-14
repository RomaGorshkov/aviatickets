import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { toggleCartItem, toggleFavorite } from '../../../store/reducers/flights';
import type { Flights } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../store/storeHooks';
import { formatDate, formatTime } from '../../../utils';

import styles from './FlightCard.module.scss';

const FlightCards: React.FC<Flights> = ({ id, airline, from, to, departureTime, arrivalTime, price, terminal, gate, tickets }) => {
  const dispatch = useAppDispatch();
  const { favoriteFlights, cartFlights } = useAppSelector((state) => state.flights);
  const navigate = useNavigate();

  const handleToggleFavorites = () => {
    dispatch(toggleFavorite({ id, airline, from, to, departureTime, arrivalTime, price, terminal, gate, tickets }));
  };

  const handleToggleCart = () => {
    dispatch(toggleCartItem({ id, airline, from, to, departureTime, arrivalTime, price, terminal, gate, tickets }));
  };

  const isFavorite = React.useMemo(() => {
    return favoriteFlights.some((fav) => fav.id === id);
  }, [favoriteFlights, id]);

  const isCartItem = React.useMemo(() => {
    return cartFlights.some((item) => item.id === id);
  }, [cartFlights, id]);

  return (
    <div className={styles.flightCard} onClick={() => navigate(`/flights/${id}`)}>
      <div className={styles.flightCard__leftSide}>
        <div className={styles.flightCard__price}>${price}</div>
        <p>
          {tickets.remaining} of {tickets.total} tickets left
        </p>
      </div>
      <div className={styles.flightCard__center}>
        <h3>{airline}</h3>
        <div className={styles.flightCard__route}>
          <span>{from}</span> → <span>{to}</span>
        </div>
        <div className={styles.flightCard__times}>
          <p>
            Departure: {formatTime(departureTime)} | {formatDate(departureTime)}
          </p>
          <p>
            Arrival: {formatTime(arrivalTime)} | {formatDate(arrivalTime)}
          </p>
        </div>
        <p>
          Terminal: {terminal}, Gate: {gate}
        </p>
      </div>
      <div className={styles.flightCard__buttons}>
        {isFavorite ? (
          <FavoriteIcon
            className={styles.flightCard__isFavorite}
            onClick={(e) => {
              e.stopPropagation();
              handleToggleFavorites();
            }}
          />
        ) : (
          <FavoriteBorderIcon
            className={styles.flightCard__noFavorite}
            onClick={(e) => {
              e.stopPropagation();
              handleToggleFavorites();
            }}
          />
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleToggleCart();
          }}
        >
          {isCartItem ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default FlightCards;
