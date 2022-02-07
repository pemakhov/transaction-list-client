import React from 'react';
import { useSelector } from 'react-redux';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import PageButton from '../../../components/DarkTextButton/PageButton';
import './PaginationBlock.scss';

function PaginationBlock() {
  const { page, pages } = useSelector((state) => state.transactions);
  const getTemplate = () => {
    const MAX_PAGES_TO_SHOW = 10;
    const START_LENGTH = page + 1 === 6 ? 7 : 6;

    if (pages <= MAX_PAGES_TO_SHOW) {
      const pattern = [...Array(pages + 1).keys()];
      pattern.shift();
      return [pattern];
    }

    let pageNumbersToShow = [];
    const start = [...Array(START_LENGTH).keys()];
    start.shift();
    pageNumbersToShow.push(start);

    if (page + 1 > START_LENGTH && page + 1 < pages - 3) {
      pageNumbersToShow.push([page + 1]);
    }

    const end = [pages - 2, pages - 1, pages];
    if (page + 1 === pages - 3) {
      end.unshift(page + 1);
    }
    pageNumbersToShow.push(end);

    return pageNumbersToShow;
  };

  const template = getTemplate();

  return (
    <div id="pagination">
      <div className="wrapper">
        <ArrowLeft />
        {template[0].map((num) => (
          <PageButton key="num" handleClick={() => {}} disabled={num === page + 1} value={num} />
        ))}
        Page: {page} of {pages}
        <ArrowRight />
      </div>
    </div>
  );
}

export default PaginationBlock;
