import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const fetchRecipeInformation = createAsyncThunk(
  "details/fetchRecipeInormation",
  async (id) => {
    const response = await axiosInstance
      .get(`/recipes/${id}/information`)
      .catch((error) => console.log("Error :", error));
    return response.data;
  }
);

const initialState = {
  selectedRecipe: [],
  loading: false,
  error: null,
};
const detailsSlice = createSlice({
  name: "deatils",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeInformation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipeInformation.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedRecipe = action.payload;
      })
      .addCase(fetchRecipeInformation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default detailsSlice.reducer;
