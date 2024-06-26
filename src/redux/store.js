import { configureStore } from '@reduxjs/toolkit';
import statisticsReducer from './statistics/statisticsReducer';
import {authReducer} from './auth/authSlice';
import { transactionsReducer } from './transactions/transactionsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    statistics: statisticsReducer, 
    transactions: transactionsReducer,
  },
});

export default store;