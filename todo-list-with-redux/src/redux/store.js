import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './topics/todoSlice';

export const store = configureStore({
    reducer: {
        todos:todoReducer
    }
  });