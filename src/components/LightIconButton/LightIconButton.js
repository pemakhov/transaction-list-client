import React from 'react';
import PropTypes from 'prop-types';
import './LightIconButton.scss';

function LightIconButton(props) {
  const { handleClick, disabled, children } = props;
  return (
    <button className="light-icon-button" onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
}

LightIconButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default LightIconButton;
