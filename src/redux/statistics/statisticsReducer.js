import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statisticsData: null,
  categories: [],
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setStatisticsData(state, action) {
      state.statisticsData = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setStatisticsData, setCategories, setLoading, setError } = statisticsSlice.actions;
export default statisticsSlice.reducer;