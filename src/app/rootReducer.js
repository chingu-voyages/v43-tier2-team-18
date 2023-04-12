// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import currentUserReducer from "../features/auth/loginUserSlice";
import userFavoritesSlice from "../features/userFavoritesSlice";

const rootReducer = combineReducers({
  signupState: authReducer,
  loginState: currentUserReducer,
  favoritesState: userFavoritesSlice,
});

export default rootReducer;
