import React, { useState } from 'react';
import { FILTERS } from '../../../constants/transactions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './FilterBlock.scss';

function FilterBlock() {
  const [userInput, setUserInput] = useState('');
  const [selected, setSelected] = useState('');

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };

  // const handleSubmit =

  return (
    <div className="filter-block">
      <div className="wrapper">
        <input
          className='search'
          type="text"
          name="userInput"
          value={userInput}
          onChange={handleUserInputChange}
          placeholder="Search..."
        />
        <select className='filter' value={selected} onChange={handleSelectChange}>
          <option value={FILTERS.from}>From</option>
          <option value={FILTERS.to}>To</option>
          <option value={FILTERS.blockNumber}>Block Number</option>
          <option value={FILTERS.id}>ID</option>
        </select>
      </div>
      <button className="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default FilterBlock;
