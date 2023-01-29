import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './slices/generalSlice';
import playerReducer from './slices/playerSlice';
export const store = configureStore({
    reducer: {
        state: generalReducer,
        player: playerReducer
    }
  })