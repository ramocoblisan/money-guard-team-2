import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import statisticsReducer from './statistics/statisticsReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    statistics: statisticsReducer, 
  },
});

export default store;