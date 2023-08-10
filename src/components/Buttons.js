import React from 'react';
import PropTypes from 'prop-types';

const getButtonClass = (label) => {
  switch (label) {
    case '÷':
    case 'x':
    case '-':
    case '+':
    case '=':
      return 'operator-button';
    case '0':
      return 'zero-button';
    default:
      return '';
  }
};

const Button = ({ children, onClick }) => (
  <button className={`calculator-button ${getButtonClass(children)}`} onClick={onClick} type="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
