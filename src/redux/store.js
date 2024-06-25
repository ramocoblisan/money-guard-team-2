import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from './auth/authSlice';
import { transactionsReducer } from './transactions/transactionsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
  },
});

export default store;