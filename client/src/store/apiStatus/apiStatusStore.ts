
import { configureStore } from '@reduxjs/toolkit';
import apiStatusReducer from './apiStatusSlice'; 

export const apiStatusStore = configureStore({
  reducer: {
    apiStatus: apiStatusReducer, 
  },
});

export type RootState = ReturnType<typeof apiStatusStore.getState>; 

export type AppDispatch = typeof apiStatusStore.dispatch; 