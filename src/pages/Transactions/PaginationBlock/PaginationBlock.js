import React from 'react';
import { useSelector } from 'react-redux';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import BlockOfPages from './components/BlockOfPages';
import { getTemplate } from './paginationTemplate';
import './PaginationBlock.scss';

function PaginationBlock() {
  const { page, pages } = useSelector((state) => state.transactions);

  const [start, center, end] = getTemplate(page + 1, pages);

  return (
    <div id="pagination">
      <div className="wrapper">
        <ArrowLeft />
        <BlockOfPages block={start} sheet={page + 1} />
        {center && <span className='pagination-divider' >...</span>}
        {center && <BlockOfPages block={center} sheet={page + 1} />}
        {end && <span className='pagination-divider' >...</span>}
        {end && <BlockOfPages block={end} sheet={page + 1} />}
        <ArrowRight />
      </div>
    </div>
  );
}

export default PaginationBlock;
