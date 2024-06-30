import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://openexchangerates.org/api';

export const APP_ID = 'b45597daee2245a3809d7a0b8433d8f0';

export const getCurrency = createAsyncThunk(
  'currency/getCurrency',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/latest.json?app_id=${APP_ID}`);
      if (response.status === 200) {
        Notiflix.Notify.success('Currency data returned!');
      }
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 403) {
        Notiflix.Notify.failure(
          'Access forbidden: Check your API key and permissions.'
        );
      } else if (error.response && error.response.status === 404) {
        Notiflix.Notify.failure('Cannot get currency data!');
      } else {
        Notiflix.Notify.failure('An unexpected error occurred!');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);