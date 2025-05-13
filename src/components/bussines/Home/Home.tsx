import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/storeHooks';
import { fetchFlights } from '../../../store/slices/flightsSlice';
import FlightCard from '../FlightCard/FlightCard';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { flights } = useAppSelector((state) => state.flights);

  React.useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.home__content}>
        {flights.map((item) => (
          <FlightCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
