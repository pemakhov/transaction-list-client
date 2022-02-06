import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactionsByFilter } from '../transactionsSlice';
import { FILTERS, TRANSACTIONS_PER_PAGE } from '../../../constants/transactions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './FilterBlock.scss';

function FilterBlock() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.transactions);

  const [userInput, setUserInput] = useState('');
  const [selected, setSelected] = useState(FILTERS.blockNumber);

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };

  const handleButtonClick = () => {
    if (!userInput) {
      return;
    }
    dispatch(fetchTransactionsByFilter({ filter: selected, value: userInput, limit: TRANSACTIONS_PER_PAGE, page }));
    setUserInput('');
  };

  return (
    <div className="filter-block">
      <div className="wrapper">
        <input
          className="search"
          type="text"
          name="userInput"
          value={userInput}
          onChange={handleUserInputChange}
          placeholder="Search..."
        />
        <select className="filter" value={selected} onChange={handleSelectChange}>
          <option value={FILTERS.blockNumber}>Block Number</option>
          <option value={FILTERS.id}>Transaction ID</option>
          <option value={FILTERS.from}>From Address</option>
          <option value={FILTERS.to}>To Address</option>
        </select>
      </div>
      <button className="search-button" onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default FilterBlock;
