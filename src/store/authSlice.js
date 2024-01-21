// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: false,
    id: "",
    username: "",
    email: "",
    role: "",
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAuthId: (state, action) => {
      state.id = action.payload;
    },
    setAuthUsername: (state, action) => {
      state.username = action.payload;
    },
    setAuthEmail: (state, action) => {
      state.email = action.payload;
    },
    setAuthRole: (state, action) => {
      state.role = action.payload;
    },
  },
});


export const {
  setAuthenticated,
  setAuthId,
  setAuthUsername,
  setAuthEmail,
  setAuthRole,
} = authSlice.actions;


export default authSlice.reducer;
