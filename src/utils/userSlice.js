import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated: false,
        user: {},
        jwt: ''
    },
    reducers: {
      insertJWT: (state, action) => {
        return {...state, authenticated: true, jwt: action.payload}
      },
      updateProfile: (state, action) => {
        return {...state, user: action.payload}
      },
      logout: () => {
        return {
            authenticated: false,
            user: {},
            jwt: ''
        }
      }
    },
  });
  
  // this is for dispatch
  export const { insertJWT, updateProfile, logout } = userSlice.actions;
  
  // this is for configureStore
  export default userSlice.reducer;