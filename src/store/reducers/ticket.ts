import { createSlice } from '@reduxjs/toolkit';

import type { Flights } from '../../types';
import { fetchTicket } from '../slices/ticketSlice';

interface TicketState {
  ticket: Flights | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: TicketState = {
  ticket: null,
  isLoading: false,
  error: null,
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicket.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ticket = action.payload;
      })
      .addCase(fetchTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const ticketReducer = ticketSlice.reducer;
