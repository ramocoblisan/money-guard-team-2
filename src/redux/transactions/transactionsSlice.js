import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  addTransactionThunk,
  deleteTransactionThunk,
  editTransactionThunk,
  fetchTransactionCategoriesThunk,
  fetchTransactionsDataThunk,
  fetchTransactionSummaryControllerThunk,
} from './operations';

const initialState = {
  transactionsList: [],
  transactionCategories: [],
  categoriesSummary: [],
  expenseSummary: 0,
  incomeSummary: 0,
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  periodTotal: 0,
  loading: false,
  error: false,
};


const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
      selectedYear: (state, { payload }) => {
        state.year = payload;
      },
      selectedMonth: (state, { payload }) => {
        state.month = payload;
      },
    },
    extraReducers: builder => {
      builder
        .addCase(fetchTransactionsDataThunk.fulfilled, (state, { payload }) => {
          state.transactionsList = payload;
          state.loading = false;
        })
        .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
          state.transactionsList = state.transactionsList.filter(
            transaction => transaction.id !== payload.id
          );
          state.loading = false;
        })
        .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
          state.transactionsList.push(payload);
          state.loading = false;
        })
        .addCase(editTransactionThunk.fulfilled, (state, { payload }) => {
          const transactionIndex = state.transactionsList.findIndex(
            transaction => transaction.id === payload.id
          );
          state.transactionsList.splice(transactionIndex, 1, payload);
          state.loading = false;
        })
        .addCase(
          fetchTransactionCategoriesThunk.fulfilled,
          (state, { payload }) => {
            state.transactionCategories = payload;
            state.loading = false;
          }
        )
        .addCase(
          fetchTransactionSummaryControllerThunk.fulfilled,
          (state, { payload }) => {
            state.categoriesSummary = payload.categoriesSummary;
            state.expenseSummary = payload.expenseSummary;
            state.incomeSummary = payload.incomeSummary;
            state.periodTotal = payload.periodTotal;
            state.loading = false;
          }
        )
        .addMatcher(
          isAnyOf(
            fetchTransactionsDataThunk.pending,
            deleteTransactionThunk.pending,
            addTransactionThunk.pending,
            editTransactionThunk.pending,
            fetchTransactionCategoriesThunk.pending,
            fetchTransactionSummaryControllerThunk.pending
          ),
          (state, { payload }) => {
            state.loading = true;
            state.error = null;
          }
        )
        .addMatcher(
          isAnyOf(
            fetchTransactionsDataThunk.rejected,
            deleteTransactionThunk.rejected,
            addTransactionThunk.rejected,
            editTransactionThunk.rejected,
            fetchTransactionCategoriesThunk.rejected,
            fetchTransactionSummaryControllerThunk.rejected
          ),
          (state, { payload }) => {
            state.error = payload;
            state.loading = false;
            toast.error(payload);
          }
        );
    },
  });
  export const transactionsReducer = transactionsSlice.reducer;
  export const { selectedYear, selectedMonth } = transactionsSlice.actions;
  // Definirea selectorilor în afara `createSlice`
  export const selectTransactions = state => state.transactions.transactionsList;
  export const selectIsLoading = state => state.transactions.loading;
  export const selectIsError = state => state.transactions.error;
  export const selectTransactionCategories = state => state.transactions.transactionCategories;
  export const selectMonth = state => state.transactions.month;
  export const selectYear = state => state.transactions.year;
  export const selectCategoriesSummary = state => state.transactions.categoriesSummary;
  export const selectExpenseSummary = state => state.transactions.expenseSummary;
  export const selectIncomeSummary = state => state.transactions.incomeSummary;
  export const selectPeriodTotal = state => state.transactions.periodTotal;
  export default transactionsSlice;