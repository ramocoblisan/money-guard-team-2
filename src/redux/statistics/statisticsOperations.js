import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosStatistics from '../../axiosStatistics';

export const getStatistics = createAsyncThunk(
  'statistics/getStatistics',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axiosStatistics.get(`/transactions-summary?${query}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'statistics/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosStatistics.get('/transaction-categories');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
