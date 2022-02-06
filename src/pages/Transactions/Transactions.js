import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecentTransactions } from './transactionsSlice';
import FilterBlock from './FilterBlock/FilterBlock';
import TransactionsTable from './TransactionsTable/TransactionsTable';

function Transactions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecentTransactions());
  }, []);

  const transactions = useSelector((state) => state.transactions.transactions);
  return (
    <>
      <div>
        <FilterBlock />
        <TransactionsTable data={transactions} />
      </div>
    </>
  );
}

export default Transactions;
