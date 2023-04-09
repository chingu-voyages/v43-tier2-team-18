import { createSlice } from "@reduxjs/toolkit";

const loginUserSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: "",
    isLoggedIn: false,
  },
  reducers: {
    // ...
    signupCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },

    clearCurrentUserValue(state) {
      state.currentUser = "";
      state.isLoggedIn = false;
    },

    loginCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },

    logoutCurrentUser(state) {
      state.currentUser = "";
      state.isLoggedIn = false;
    },
  },
});

export const {
  signupCurrentUser,
  clearCurrentUserValue,
  loginCurrentUser,
  logoutCurrentUser,
} = loginUserSlice.actions;
export default loginUserSlice.reducer;
