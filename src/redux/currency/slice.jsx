import { createSlice } from '@reduxjs/toolkit';
import { getCurrency } from './operations';

const currencyInitialState = {
  currency: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: currencyInitialState,
  extraReducers: builder => {
    builder
      .addCase(getCurrency.pending, handlePending)
      .addCase(getCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currency = action.payload;
      })
      .addCase(getCurrency.rejected, handleRejected);
  },
});

export const currencyReducer = currencySlice.reducer;
