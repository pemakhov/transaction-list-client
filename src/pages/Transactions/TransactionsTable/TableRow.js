import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getEtherscanTransactionURL } from '../service';
import { getFormattedDate, parseIntFromHexString } from '../service';
import { loading } from '../../../constants/loadingStates';
import { ethers } from 'ethers';

function TableRow({ data }) {
  const { _id, from, to, blockNumber, confirmations, date, value, fee } = data;
  const url = getEtherscanTransactionURL(_id);
  const freeze = useSelector((state) => state.transactions.loading) === loading.PENDING;
  const tableClassName = freeze ? 'row loading' : 'row';

  return (
    <div className={tableClassName}>
      <div className="cell">
        <p>{parseIntFromHexString(blockNumber)}</p>
      </div>
      <div className="cell">
        <p>
          <a href={url}>{_id}</a>
        </p>
      </div>
      <div className="cell">
        <p>{from}</p>
      </div>
      <div className="cell">
        <p>{to}</p>
      </div>
      <div className="cell">
        <p>{confirmations}</p>
      </div>
      <div className="cell">
        <p>{getFormattedDate(date)}</p>
      </div>
      <div className="cell">
        <p>{ethers.utils.formatEther(value)}</p>
      </div>
      <div className="cell">
        <p>{ethers.utils.formatEther(fee)}</p>
      </div>
    </div>
  );
}

TableRow.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    blockNumber: PropTypes.string.isRequired,
    confirmations: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    fee: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableRow;
