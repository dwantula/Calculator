import React  from 'react';
import './styles.scss';

function ButtonComponent({ className, type, onClick, text }) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
    >
    {text}
    </button>
  )
}

export default ButtonComponent;
