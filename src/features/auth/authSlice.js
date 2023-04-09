import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signupCredentials: [],
    loginCredentials: {},
  },
  reducers: {
    // ...
    signupNewUser(state, action) {
      const { email, password } = action.payload;
      state.signupCredentials.push(action.payload);
      state.loginCredentials[email] = password;
    },

    clearValue(state) {
      state.signupCredentials = [];
      state.loginCredentials = {};
    },
  },
});

export const { signupNewUser, clearValue } = authSlice.actions;
export default authSlice.reducer;
