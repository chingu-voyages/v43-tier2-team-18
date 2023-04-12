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
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        state.itemCount += 1;
      }
    },

    removeFromFavorites(state, action) {
      const indexToRemove = state.favorites.findIndex(
        (favorite) => favorite === action.payload
      );
      if (indexToRemove !== -1) {
        state.favorites.splice(indexToRemove, 1);
        state.itemCount -= 1;
      }
    },

    clearFavorites(state) {
      state.favorites = [];
      state.itemCount = 0;
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
  userFavoritesSlice.actions;
export default userFavoritesSlice.reducer;
