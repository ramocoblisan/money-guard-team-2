
import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactionCategoriesThunk } from './operations';

const categoriesTrInitialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoriesTrSlice = createSlice({
  name: "categories_transactions", // Numele corect pentru reducer
  initialState: categoriesTrInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionCategoriesThunk.pending, handlePending)
      .addCase(fetchTransactionCategoriesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchTransactionCategoriesThunk.rejected, handleRejected);
  },
});

export const categoriesTrReducer = categoriesTrSlice.reducer;