import React from 'react';
import './styles.scss';

function DisplayComponent({ value }){
  return (
    <div className="display">
      <p>{value}</p>
    </div>
  )
}
export default DisplayComponent;
