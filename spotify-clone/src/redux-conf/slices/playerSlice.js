import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPlayingTrack: {},
  currentAlbum: {},
  mp:document.createElement("AUDIO")
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.currentPlayingTrack = action.payload;
      state.mp.src=`http://localhost:8080/musify/download/file/${state.currentPlayingTrack.blobId}`;
      state.mp.play();
    },
    setCurrentAlbum: (state, action) => {
      state.currentAlbum = action.payload;
    },
  },
});

export const { setTrack, setCurrentAlbum } = playerSlice.actions;

export default playerSlice.reducer;
