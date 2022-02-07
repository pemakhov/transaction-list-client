import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setPage } from '../../transactionsSlice';
import PageButton from '../../../../components/PageButton/PageButton';

function BlockOfPages({ sheet, block }) {
  const dispatch = useDispatch();

  return block.map((num) => (
    <PageButton
      key={num}
      handleClick={() => {
        dispatch(setPage(num - 1));
      }}
      disabled={num === sheet}
      value={num}
    />
  ));
}

BlockOfPages.propTypes = {
  sheet: PropTypes.number.isRequired,
  block: PropTypes.array.isRequired,
};

export default BlockOfPages;
