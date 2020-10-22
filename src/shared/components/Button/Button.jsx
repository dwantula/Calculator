import React  from 'react';
import './styles.scss';

function ButtonComponent(props) {
  return (
    <div>
      <button
        className={`button ${props.className}`}
        onClick={() => props.handleClick(props.children)}
        type="button">
        {props.children}
      </button>
    </div>
  )
}

export default ButtonComponent;
