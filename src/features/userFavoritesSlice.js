import { createSlice } from "@reduxjs/toolkit";

const userFavoritesSlice = createSlice({
  name: "auth",
  initialState: {
    favorites: [],
    itemCount: 0,
  },
  reducers: {
    // ...
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
      state.itemCount += 1;
    },

    clearFavorites(state) {
      state.favorites = [];
      state.itemCount = 0;
    },
  },
});

export const { addToFavorites, clearFavorites } = userFavoritesSlice.actions;
export default userFavoritesSlice.reducer;
