import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuserData: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setUserData,  } = userSlice.actions;

export default userSlice.reducer;
