import React from 'react';

import FlightsListLayout from '../../../layouts/FlightsListLayout/FlightsListLayout';
import { useAppSelector } from '../../../store/storeHooks';
import FlightCards from '../../shared/FlightCards/FlightCard';

const Cart: React.FC = () => {
  const { cartFlights } = useAppSelector((state) => state.flights);

  const totalPrice = cartFlights.reduce((sum, ticket) => sum + ticket.price, 0);

  return (
    <FlightsListLayout>
      {!cartFlights.length ? (
        <h2>Pleace add tickets to your cart</h2>
      ) : (
        <>
          <h3>Total amount in your cart: ${totalPrice}</h3>
          {cartFlights.map((item) => (
            <FlightCards {...item} />
          ))}
        </>
      )}
    </FlightsListLayout>
  );
};

export default Cart;
