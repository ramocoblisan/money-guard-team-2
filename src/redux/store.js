import { configureStore } from '@reduxjs/toolkit';
import statisticsReducer from './statistics/statisticsReducer';
import { authReducer } from './auth/authSlice';
import { transactionsReducer } from './transactions/transactionsSlice';
import { categoriesTrReducer } from './transactions/categoriesTrSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    statistics: statisticsReducer,
    transactions: transactionsReducer,
    categories_transactions: categoriesTrReducer, 
  },
});

export default store;