import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/storeHooks';
import { fetchFlights } from '../../../store/slices/flightsSlice';
import FlightCards from '../../shared/FlightCards/FlightCard';
import FlightsListLayout from '../../../layouts/FlightsListLayout/FlightsListLayout';
import Preloader from '../../shared/Preloader/Preloader';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { flights, isLoading } = useAppSelector((state) => state.flights);

  React.useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  return <FlightsListLayout>{isLoading ? <Preloader /> : flights.map((item) => <FlightCards key={item.id} {...item} />)}</FlightsListLayout>;
};

export default Home;
