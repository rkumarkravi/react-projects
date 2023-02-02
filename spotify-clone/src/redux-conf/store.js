import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./slices/generalSlice";
import playerReducer from "./slices/playerSlice";
import userReducer from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    state: generalReducer,
    player: playerReducer,
    user: userReducer,
  },
});
