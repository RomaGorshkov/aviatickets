import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { Flights } from '../../types';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchTicket = createAsyncThunk<Flights, string>('ticket/fetchTicket', async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
});
