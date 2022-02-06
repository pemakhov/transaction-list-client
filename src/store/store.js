import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from '../pages/Transactions/transactionsSlice';

export default configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});
