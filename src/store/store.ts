import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { flightsReducer } from './reducers/flights';

const rootReducer = combineReducers({
  flights: flightsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
