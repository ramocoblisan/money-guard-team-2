import { createAsyncThunk } from '@reduxjs/toolkit';
import * as yup from 'yup';
import Notiflix from 'notiflix';
import axiosWallet from '../../axiosWallet';

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
  // Actualizăm starea de autentificare în funcție de nevoile aplicației
  console.log('Setting logged in state:', user, token);
  localStorage.setItem('token', token); // Setăm token-ul în localStorage
  setAuthHeader(token); // Setăm token-ul în header-ul de autorizare
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
      // Apelăm funcția setLoggedIn pentru a actualiza starea de autentificare
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
      // Apelăm funcția setLoggedIn pentru a actualiza starea de autentificare
      setLoggedIn(res.data.user, res.data.token);
      setAuthHeader(res.data.token); // Setăm token-ul în header-ul de autorizare
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
        localStorage.removeItem('token'); // Ștergem token-ul din localStorage la delogare
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
    const savedToken = localStorage.getItem('token'); // Luăm token-ul din localStorage
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
// De facut cu await.axios
export const fetchTransactionsDataThunk = createAsyncThunk(
  'fetchTransactionsData',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosWallet.get('/transactions');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async (transaction, thunkAPI) => {
    try {
      await axiosWallet.delete(`/transactions/${transaction.id}`);
      return transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (body, thunkAPI) => {
    try {
      const { data } = await axiosWallet.post('/transactions', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editTransactionThunk = createAsyncThunk(
  'editTransaction',
  async (body, thunkAPI) => {
    try {
      const { data } = await axiosWallet.patch(`/transactions/${body.id}`, body.content);
      thunkAPI.dispatch(refreshThunk());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchTransactionCategoriesThunk = createAsyncThunk(
  'fetchTransactionCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosWallet.get('/transaction-categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchTransactionSummaryControllerThunk = createAsyncThunk(
  'fetchTransactionSummaryController',
  async (query, thunkAPI) => {
    try {
      const { data } = await axiosWallet.get(`/transactions-summary?month=${query.month}&year=${query.year}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);