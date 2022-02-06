import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementPage } from '../../transactionsSlice';
import LightIconButton from '../../../../components/LightIconButton/LightIconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function ArrowLeft() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(decrementPage());
  const { page } = useSelector((state) => state.transactions);

  return (
    <LightIconButton handleClick={handleClick} disabled={page < 1}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </LightIconButton>
  );
}

export default ArrowLeft;
