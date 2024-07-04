import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosStatistics from '../../axiosStatistics';

export const getBalanceThunk = createAsyncThunk(
  'auth/getBalance',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosStatistics.get('/users/current');
      return data;
    } catch (error) {
      console.error('Get balance error response:', error.response);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getBalanceThunk;