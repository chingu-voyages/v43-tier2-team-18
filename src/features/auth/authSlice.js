import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signupCredentials: [],
    loginCredentials: {},
    isLoggedIn: false,
  },
  reducers: {
    // ...
    signupNewUser(state, action) {
      const { email, password } = action.payload;
      state.signupCredentials.push(action.payload);
      state.loginCredentials[email] = password;
      state.isLoggedIn = "true";
    },

    clearValue(state) {
      state.signupCredentials = [];
      state.loginCredentials = {};
      state.isLoggedIn = false;
    },

    loginUser(state) {
      state.isLoggedIn = true;
    },
  },
});

export const { actions, reducer } = authSlice;
