import React from 'react';
import PropTypes from 'prop-types';
import TableHead from './TableHead';
import TableRow from './TableRow';
import './TransactionsTable.scss';

function TransactionsTable({ data }) {
  return (
    <div id="transactions-table">
      <TableHead />
      {data.map((row) => (
        <TableRow data={row} key={row._id} />
      ))}
    </div>
  );
}

TransactionsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      from: PropTypes.string,
      to: PropTypes.string,
      blockNumber: PropTypes.string,
      confirmations: PropTypes.number,
      date: PropTypes.string,
      value: PropTypes.string,
      fee: PropTypes.string,
    })
  ).isRequired,
};
export default TransactionsTable;
