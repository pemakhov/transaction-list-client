import React from 'react';
import PropTypes from 'prop-types';
import './PageButton.scss';

function PageButton(props) {
  const { handleClick, disabled, value } = props;
  return (
    <button className="dark-text-button" onClick={handleClick} disabled={disabled}>
      {value}
    </button>
  );
}

PageButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default PageButton;
