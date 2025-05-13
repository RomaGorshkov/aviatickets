import { createSlice } from '@reduxjs/toolkit';

import { fetchFlights } from '../slices/flightsSlice';
import type { Flights } from '../../types';

interface FlightsState {
  flights: Flights[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FlightsState = {
  flights: [],
  isLoading: false,
  error: null,
};

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {},
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

export const flightsReducer = flightsSlice.reducer;
