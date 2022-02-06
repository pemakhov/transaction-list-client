import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecentTransactions } from './transactionsSlice';
import FilterBlock from './FilterBlock/FilterBlock';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import PaginationBlock from './PaginationBlock/PaginationBlock';

function Transactions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecentTransactions());
  }, []);

  const { transactions, pages } = useSelector((state) => state.transactions);
  return (
    <>
      <div>
        <FilterBlock />
        <TransactionsTable data={transactions} />
        {pages > 1 && <PaginationBlock />}
      </div>
    </>
  );
}

export default Transactions;
