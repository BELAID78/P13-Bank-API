import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated: false,
        user: {},
        jwt: ''
    },
    reducers: {
      insertProfile: (state, action) => {
        return {...state, user: action.payload}
      },
      insertJWT: (state, action) => {
        return {...state, authenticated: true, jwt: action.payload}
      },
      updateProfile: (state, action) => {
        return {...state, authenticated: true, user: action.payload}
      }
    },
  });
  
  // this is for dispatch
  export const { insertProfile } = userSlice.actions;
  
  // this is for configureStore
  export default userSlice.reducer;