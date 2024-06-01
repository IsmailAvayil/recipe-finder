import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: {
    favoutiteRecipes: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      state.favoutiteRecipes.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.favoutiteRecipes = action.payload;
    },
  },
});

export default savedSlice.reducer;
export const { addToFavourites, removeFromFavourites } = savedSlice.actions;
