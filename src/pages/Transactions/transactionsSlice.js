import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IDLE, PENDING } from '../../constants/loadingStates';
import { fetchRecentTransactionsURL, filteredURLBase } from '../../constants/urls';
import { FILTERS } from '../../constants/transactions';

export const fetchRecentTransactions = createAsyncThunk('transactions/fetchLast', async () => {
  try {
    const response = await axios.get(fetchRecentTransactionsURL);
    const transactions = response && response?.data;
    return transactions || [];
  } catch (e) {
    console.error(e.message);
  }
});

const getFilteredTransactionsURL = (base, filter, value, limit, page) =>
  `${base}?filter=${filter}&value=${value}&limit=${limit}&page=${page}`;

export const fetchTransactionsByFilter = createAsyncThunk('transactions/fetchFiltered', async ({ filter, value, limit, page }) => {
  try {
    const url = getFilteredTransactionsURL(filteredURLBase, filter, value, limit, page);
    console.log({ url });
    const response = await axios.get(url);
    const transactions = response && response?.data;
    console.log({ transactions });
    return transactions || [];
  } catch (e) {
    console.error(e.message);
  }
});

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    currentFilter: FILTERS.blockNumber,
    transactions: [],
    page: 0,
    pages: 1,
    loading: IDLE,
  },
  reducers: {
    setCurrentFilter: (state, action) => ({ ...state, currentFilter: action.payload }),
    setTransactions: (state, action) => ({ ...state, transactions: action.payload }),
    setPage: (state, action) => {
      const page = action.payload;
      const pages = state.pages;
      return page < pages && page >= 0 ? { ...state, page } : state;
    },
    setPages: (state, action) => {
      const pages = action.payload;
      const page = state.page;
      return page >= pages ? { ...state, page: pages - 1, pages } : { ...state, pages };
    },
    incrementPage: (state) => {
      const { page, pages } = state;
      return page >= pages ? { ...state, page: pages - 1 } : { ...state, page: page + 1 };
    },
    decrementPage: (state) => {
      const { page } = state;
      return page < 0 ? { ...state, page: 0 } : { ...state, page: page + 1 };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecentTransactions.pending, (state) => ({ ...state, loading: PENDING }));
    builder.addCase(fetchRecentTransactions.fulfilled, (state, action) => {
      return { ...state, loading: IDLE, transactions: action.payload || [] };
    });
    builder.addCase(fetchTransactionsByFilter.pending, (state) => ({ ...state, loading: PENDING }));
    builder.addCase(fetchTransactionsByFilter.fulfilled, (state, action) => {
      return { ...state, loading: IDLE, transactions: action.payload || [] };
    });
  },
});

export const { setCurrentFilter, setTransactions, setPage, setPages, incrementPage, decrementPage } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
