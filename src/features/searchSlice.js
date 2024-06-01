import axiosInstance from "../api/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "search/fetchRecipes",
  async (ingredients) => {
    const response = await axiosInstance
      .get(`/recipes/findByIngredients?ingredients=${ingredients}`)
      .catch((error) => console.log("Error: ", error));
    return response.data;
  }
);

const initialState = {
  recipes: [],
  loading: false,
  errormsg: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.errormsg = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.errormsg = null;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.errormsg = action.error.message;
      });
  },
});

export default searchSlice.reducer;
