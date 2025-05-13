import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});
