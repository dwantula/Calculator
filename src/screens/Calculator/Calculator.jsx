import React, { PureComponent } from 'react';
import ButtonComponent from '../../shared/components/Button/Button';
// import ClearButtonComponent from '../../shared/components/ClearButton/ClearButton';
import DisplayComponent from '../../shared/components/Display/Display';
import CalculatorKey, { keyTypes } from './CalculatorKey/CalculatorKey';
import './styles.scss';

class CalculatorComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  };

  clearDisplay = () => {
    this.setState({ result: '' });
  }

  addToDisplay = val => {
    this.setState(prevState => ({
      result: prevState.result + val
    }));
  };

  handleEqual = () => {
    this.setState({ result: eval(this.state.result) });
  };

  calculatorKeys = [
    { value: 'C', type: keyTypes.clear,action: this.clearDisplay },
    { value: 7, action: this.addToDisplay },
    { value: 8, action: () => {} },
    { value: 9, action: () => {} },
    { value: '/', action: () => {} },
    { value: 6, action: () => {} },
    { value: 5, action: () => {} },
    { value: 4, action: () => {} },
    { value: '*', action: () => {} },
    { value: 3, action: () => {} },
    { value: 2, action: () => {} },
    { value: 1, action: () => {} },
    { value: '-', action: () => {} },
    { value: 0, action: () => {} },
    { value: '.', action: () => {} },
    { value: '=', action: () => {} },
    { value: '+', action: () => {} },
  ]

  render() {
    return (
      <div className="card">
        <header className="title">
          <h2>Calculator</h2>
        </header>
          <main>
            {/* <ClearButtonComponent
             className="clear-button"
             handleClear={this.clearDisplay}>
              C
            </ClearButtonComponent> */}
            <DisplayComponent
              value={this.state.result}
            />
            {
              this.calculatorKeys.map(({ value, type, action }) => (
                <CalculatorKey
                  value={value}
                  type={type}
                  onPressed={action}
                />
              ))
            }
            {/* <ButtonComponent
              handleClick={this.addToDisplay}>
              8
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}>
              9
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}
              className="function-button">
              /
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}>
              4
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}>
              5
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}>
              6
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}
              className="function-button">
              *
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}>
              1
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}>
              2
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}>
              3
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}
              className="function-button">
              -
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}>
              0
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}>
              .
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.handleEqual}
              className="result-button">
              =
            </ButtonComponent>
            <ButtonComponent
              handleClick={this.addToDisplay}
              className="function-button">
              +
            </ButtonComponent> */}
          </main>
      </div>
    )
  }
}
export default CalculatorComponent;
