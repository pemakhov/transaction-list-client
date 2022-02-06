import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementPage } from '../../transactionsSlice';
import LightIconButton from '../../../../components/LightIconButton/LightIconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ArrowRight() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(incrementPage());
  const { page, pages } = useSelector((state) => state.transactions);
  return (
    <LightIconButton handleClick={handleClick} disabled={page >= pages - 1 }>
      <FontAwesomeIcon icon={faChevronRight} />
    </LightIconButton>
  );
}

export default ArrowRight;
