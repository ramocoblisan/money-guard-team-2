import axiosWallet from '../../axiosWallet';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as yup from 'yup';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-center',
  distance: '10px',
  opacity: 1,
});

const registerSchema = yup.object().shape({
  username: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const setAuthHeader = token => {
  axiosWallet.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axiosWallet.defaults.headers.common.Authorization = '';
};

const validateRegistrationData = async (data) => {
  try {
    await registerSchema.validate(data, { abortEarly: false });
    return null; // No errors
  } catch (validationErrors) {
    return validationErrors.inner.map(error => error.message);
  }
};

const setLoggedIn = (user, token) => {
  console.log('Setting logged in state:', user, token);
  localStorage.setItem('token', token);
  setAuthHeader(token);
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    const validationErrors = await validateRegistrationData(credentials);
    if (validationErrors) {
      Notiflix.Notify.failure(`Validation errors: ${validationErrors.join(', ')}`);
      return thunkAPI.rejectWithValue(validationErrors);
    }

    try {
      console.log('Registering with credentials:', credentials);
      const res = await axiosWallet.post('/auth/sign-up', credentials);
      console.log('Registration response:', res.data);

      setLoggedIn(res.data.user, res.data.token);

      setAuthHeader(res.data.token);
      if (res.status === 201) {
        Notiflix.Notify.success(`Successful registration! Welcome, ${res.data.user.username}!`);
      }
      return res.data;
    } catch (error) {
      console.error('Registration error response:', error.response);
      console.error('Error data:', error.response.data);
      console.error('Error message array:', error.response.data.message);
      if (error.response && error.response.status === 400) {
        Notiflix.Notify.failure('Signup failed. Please try again.');
      } else if (error.response && error.response.status === 409) {
        Notiflix.Notify.failure('Email already exists. Please sign in.');
      } else {
        Notiflix.Notify.failure('Unexpected error. Please try again later.');
      }
      console.error('Registration error message:', error.message);
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      console.log('Logging in with credentials:', credentials);
      const res = await axiosWallet.post('/auth/sign-in', credentials);
      console.log('Login response:', res.data);

      setLoggedIn(res.data.user, res.data.token);

      setAuthHeader(res.data.token);
      if (res.status === 201) {
        Notiflix.Notify.success(`Successful login! Welcome, ${res.data.user.username}!`);
        return res.data;
      }
    } catch (error) {
      console.error('Login error response:', error.response);
      console.error('Login error message:', error.message);
      if (error.response && error.response.status === 400) {
        Notiflix.Notify.failure('Signin failed. Please try again.');
      } else if (error.response && error.response.status === 403) {
        Notiflix.Notify.failure('Password is incorrect. Please try again.');
      } else if (error.response && error.response.status === 404) {
        Notiflix.Notify.failure('Email not found. Please sign up.');
      } else {
        Notiflix.Notify.failure('Unexpected error. Please try again.');
      }
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const res = await axiosWallet.delete('/auth/sign-out');
      if (res.status === 204) {
        Notiflix.Notify.info('You have successfully logged out.');
        localStorage.removeItem('token');
        clearAuthHeader();
      }
      return res.data;
    } catch (error) {
      console.error('Logout error response:', error.response);
      console.error('Error data:', error.response.data);
      if (error.response && error.response.status === 404) {
        Notiflix.Notify.failure('Logout endpoint not found. Please try again later.');
      } else if (error.response && error.response.status === 401) {
        Notiflix.Notify.failure('Bearer authentication failed.');
      } else {
        Notiflix.Notify.failure('Logout failed. Please try again.');
      }
      console.error('Logout error message:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) {
      return thunkAPI.rejectWithValue('Token does not exist!');
    }
    try {
      setAuthHeader(savedToken);
      const { data } = await axiosWallet.get('/users/current');
      return data;
    } catch (error) {
      console.error('Refresh error response:', error.response);
      console.error('Error data:', error.response.data);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBalanceThunk = createAsyncThunk(
  'auth/getBalance',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosWallet.get('/users/current');
      return data;
    } catch (error) {
      console.error('Get balance error response:', error.response);
      console.error('Error data:', error.response.data);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Adăugăm funcțiile addTransactionThunk și deleteTransactionThunk
export const addTransactionThunk = createAsyncThunk(
  'auth/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axiosWallet.post('/transactions', transaction);
      return data;
    } catch (error) {
      console.error('Add transaction error response:', error.response);
      console.error('Error data:', error.response.data);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'auth/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      const { data } = await axiosWallet.delete(`/transactions/${transactionId}`);
      return data;
    } catch (error) {
      console.error('Delete transaction error response:', error.response);
      console.error('Error data:', error.response.data);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
