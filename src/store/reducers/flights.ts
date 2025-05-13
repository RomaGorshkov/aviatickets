import { createSlice } from '@reduxjs/toolkit';

import { fetchFlights } from '../slices/flightsSlice';
import type { Flights } from '../../types';

interface FlightsState {
  flights: Flights[];
  favoriteFlights: Flights[];
  cartFlights: Flights[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FlightsState = {
  flights: [],
  favoriteFlights: JSON.parse(localStorage.getItem('favoritesFlights') || '[]'),
  cartFlights: JSON.parse(localStorage.getItem('cartFlights') || '[]'),
  isLoading: false,
  error: null,
};

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favoriteFlights.findIndex((fav) => fav.id === action.payload.id);

      if (index === -1) {
        state.favoriteFlights.push(action.payload);
      } else {
        state.favoriteFlights.splice(index, 1);
      }

      localStorage.setItem('favoritesFlights', JSON.stringify(state.favoriteFlights));
    },
    toggleCartItem: (state, action) => {
      const index = state.cartFlights.findIndex((item) => item.id === action.payload.id);

      if (index === -1) {
        state.cartFlights.push(action.payload);
      } else {
        state.cartFlights.splice(index, 1);
      }

      localStorage.setItem('cartFlights', JSON.stringify(state.cartFlights));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.flights = action.payload;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { toggleFavorite, toggleCartItem } = flightsSlice.actions;
export const flightsReducer = flightsSlice.reducer;
