import { configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "../features/auth/authSlice";

//persistence in redux store
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["root"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
