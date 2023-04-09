// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import currentUserReducer from "../features/auth/loginUserSlice";

const rootReducer = combineReducers({
  signupState: authReducer,
  loginState: currentUserReducer,
});

export default rootReducer;
