import { createSlice } from '@reduxjs/toolkit';

import { fetchFlights } from '../slices/flightsSlice';
import type { Flights } from '../../types';

interface FlightsState {
  flights: Flights[];
  favoriteFlights: Flights[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FlightsState = {
  flights: [],
  favoriteFlights: JSON.parse(localStorage.getItem('favoritesFlights') || '[]'),
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

export const { toggleFavorite } = flightsSlice.actions;
export const flightsReducer = flightsSlice.reducer;
