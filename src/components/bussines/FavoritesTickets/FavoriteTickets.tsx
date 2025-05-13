import React from 'react';

import FlightsListLayout from '../../../layouts/FlightsListLayout/FlightsListLayout';
import FlightCards from '../../shared/FlightCards/FlightCard';
import { useAppSelector } from '../../../store/storeHooks';

const FavoriteTickets: React.FC = () => {
  const { favoriteFlights } = useAppSelector((state) => state.flights);

  return (
    <FlightsListLayout>
      {!favoriteFlights.length ? <h2>Pleace add your favorites tickets</h2> : favoriteFlights.map((item) => <FlightCards key={item.id} {...item} />)}
    </FlightsListLayout>
  );
};

export default FavoriteTickets;
