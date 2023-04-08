import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signupCredentials: [],
  },
  reducers: {
    // ...
    signupNewUser(state, action) {
      state.signupCredentials.push(action.payload);
    },
    clearValue(state) {
      state.signupCredentials = [];
    },
  },
});

export const { actions, reducer } = authSlice;
