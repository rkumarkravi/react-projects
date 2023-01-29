import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: { name: "ravi Kumar1" },
  loading: false,
  errorMsg: { message: "", severity: "success", show: false },
};

const generalSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userData = action.payload;
    },
    updatePlaylist: (state, action) => {
      state.playListData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = { ...action.payload, show: true };
    },
    snackBarAction: (state, action) => {
      state.errorMsg.show = action.payload;
    },
  },
});

export const {
  updateUser,
  setLoading,
  setErrorMsg,
  snackBarAction,
} = generalSlice.actions;

export default generalSlice.reducer;
