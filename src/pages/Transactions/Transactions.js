import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from './transactionsSlice';
import FilterBlock from './FilterBlock/FilterBlock';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import PaginationBlock from './PaginationBlock/PaginationBlock';
import { TRANSACTIONS_PER_PAGE } from '../../constants/transactions';

function Transactions() {
  const dispatch = useDispatch();
  const { pages, page, filter, value } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions({ filter, value, limit: TRANSACTIONS_PER_PAGE, page }));
  }, [page, filter, value]);


  return (
    <>
      <div>
        <FilterBlock />
        <TransactionsTable />
        {pages > 1 && <PaginationBlock />}
      </div>
    </>
  );
}

export default Transactions;
