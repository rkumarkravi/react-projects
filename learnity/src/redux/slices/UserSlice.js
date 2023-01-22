import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name:"ravi",
    email:"rk@gmail.com",
    phoneNo:"8368128599"
  },
  reducers: {
    updateUser: (state,action) => {
      state.name=action.payload.name;
      state.email=action.payload.email;
      state.phoneNo=action.payload.phoneNo;
    },
    deleteUser: (state,action) => {
      state = null;
    }
  }
})

export const { updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;