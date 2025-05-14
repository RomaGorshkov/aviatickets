import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { flightsReducer } from './reducers/flights';
import { ticketReducer } from './reducers/ticket';

const rootReducer = combineReducers({
  flights: flightsReducer,
  ticket: ticketReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
