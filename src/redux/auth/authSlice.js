import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getBalanceThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  addTransactionThunk,
  deleteTransactionThunk,
} from './operations';

const initialState = {
  user: {
    username: '',
    email: '',
    balance: 0,
  },
  token: null,
  loading: false,
  error: false,
  isLoggedIn: false,
  isRefresh: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBalanceThunk.fulfilled, (state, { payload }) => {
        state.user.balance = payload.balance;
      })
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.user.balance += payload.amount;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.user.balance -= payload.amount;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.user.balance = payload.balance;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefresh = false;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.isRefresh = false;
        toast.error(payload);
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.isRefresh = false;
        toast.error(payload);
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.isRefresh = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user.username = payload.user.username;
          state.user.email = payload.user.email;
          state.user.password = payload.user.password;
          state.user.balance = payload.user.balance;
          state.token = payload.token;
          state.loading = false;
          state.isLoggedIn = true;
          state.isRefresh = false;
          toast.success(`Welcome, ${payload.user.username}`);
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending, refreshThunk.pending),
        (state) => {
          state.loading = true;
          state.error = null;
          state.isRefresh = true;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.rejected, loginThunk.rejected, refreshThunk.rejected),
        (state, { payload }) => {
          state.error = payload;
          state.loading = false;
          state.isRefresh = false;
        }
      );
  },
});

export const authReducer = slice.reducer;
export const { logout } = slice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectToken = (state) => state.auth.token;
export const selectIsRefresh = (state) => state.auth.isRefresh;
export const selectBalance = (state) => state.auth.user.balance;
export const selectIsLoading = (state) => state.auth.loading;

export default slice;
