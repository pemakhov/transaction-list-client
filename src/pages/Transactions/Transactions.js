import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecentTransactions } from './transactionsSlice';
import FilterBlock from './FilterBlock/FilterBlock';

function Transactions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecentTransactions());
  }, []);

  const transactions = useSelector((state) => state.transactions.transactions);
  return (
    <div>
      <FilterBlock />
      {transactions.map((item) => (
        <div key={item._id}>{item._id}</div>
      ))}
    </div>
  );
}

export default Transactions;
