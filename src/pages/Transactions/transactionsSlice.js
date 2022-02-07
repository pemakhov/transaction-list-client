import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IDLE, PENDING } from '../../constants/loadingStates';
import { fetchAllURL, fetchFilteredURL } from '../../constants/urls';
import { FILTERS } from '../../constants/transactions';

const getAllTransactionsURL = (base, limit, page) => `${base}?limit=${limit}&page=${page}`;

const getTransactionsURL = (base, filter, value, limit, page) =>
  `${base}?filter=${filter}&value=${value}&limit=${limit}&page=${page}`;

export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async (query) => {
  try {
    const { filter, value, limit, page } = query;

    const url = value
      ? getTransactionsURL(fetchFilteredURL, filter, value, limit, page)
      : getAllTransactionsURL(fetchAllURL, limit, page);
    console.log({ url });
    const response = await axios.get(url);
    const data = response && response?.data;
    return data || { transactions: [], pages: 0 };
  } catch (e) {
    console.error(e.message);
  }
});

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    page: 0,
    pages: 1,
    loading: IDLE,
    filter: FILTERS.blockNumber,
    value: '',
  },
  reducers: {
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
      return page < 0 ? { ...state, page: 0 } : { ...state, page: page - 1 };
    },
    setFilter: (state, action) => {
      const newFilter = action.payload;
      return newFilter === state.filter ? { ...state } : { ...state, page: 0, filter: newFilter };
    },
    setValue: (state, action) => {
      const newValue = action.payload;
      return newValue === state.value ? { ...state } : { ...state, value: newValue };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.pending, (state) => ({ ...state, loading: PENDING }));
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      try {
        console.log('payload', action.payload);
        const { transactions, pages } = action.payload;
        return { ...state, loading: IDLE, transactions, pages };
      } catch (e) {
        console.error(e.message);
      }
    });
  },
});

export const { setTransactions, setPage, setPages, incrementPage, decrementPage, setFilter, setValue } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
