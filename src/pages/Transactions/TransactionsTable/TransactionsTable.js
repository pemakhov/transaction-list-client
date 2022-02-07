import React from 'react';
import { useSelector } from 'react-redux';
import TableHead from './TableHead';
import TableRow from './TableRow';
import './TransactionsTable.scss';

function TransactionsTable() {
  const { transactions } = useSelector((state) => state.transactions);

  return (
    <div id="transactions-table">
      <TableHead />
      {transactions.map((row) => (
        <TableRow data={row} key={row._id} />
      ))}
    </div>
  );
}

export default TransactionsTable;
