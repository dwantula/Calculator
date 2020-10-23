import React from 'react';
import ButtonComponent from '../../../shared/components/Button/Button';
import './styles.scss';

export const keyTypes = {
  clear: 'clear',
  operator: 'operator',
  result: 'result'
}

function CalculatorKey({ value, onPressed, type }) {
  return (
    <ButtonComponent
      text={value}
      className={`${type}-key`}
      onClick={() => onPressed(value)}
    />
  )
}

export default CalculatorKey;
