import React from 'react'
import './styles.scss';

function ClearButtonComponent(props) {
  return (
    <button
      className={props.className}
      onClick={props.handleClear}>
      {props.children}
    </button>
  )
}

export default ClearButtonComponent;