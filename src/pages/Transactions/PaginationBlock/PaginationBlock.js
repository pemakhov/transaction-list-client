import React from 'react';
import { useSelector } from 'react-redux';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import './PaginationBlock.scss';

function PaginationBlock() {
  const { page, pages } = useSelector((state) => state.transactions);
  return (
    <div id="pagination">
      <div className="wrapper">
        <ArrowLeft />
        Page: {page} of {pages}
        <ArrowRight />
      </div>
    </div>
  );
}

export default PaginationBlock;
