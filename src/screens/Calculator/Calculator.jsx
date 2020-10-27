import React, { PureComponent } from 'react';
import CalculatorKey, { keyTypes } from './CalculatorKey/CalculatorKey';
import DisplayComponent from '../../shared/components/Display/Display';
import './styles.scss';

class CalculatorComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    };
  };

  clearDisplay = () => {
    this.setState({ display: '' });
  }

  isOperator = (key) => {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(key);
  }

  checkLastElementOnDisplay = () => {
    const lastElem = this.state.display.slice(-1);
    return this.isOperator(lastElem);
  };

  addNewElement = val => {
    this.setState(prevState => ({
      display: prevState.display + val,
    }))
  };

  replaceLastElement = val => {
    const display = this.state.display;
    const displayReplaced = display.slice(0, -1) + val;
    this.setState({
      display: displayReplaced,
    })
  }

  addToDisplay = (val) => {
    // this.checkLastElementOnDisplay() ? this.replaceLastElement(val) : this.addNewElement(val)
    if (this.isOperator(val)) {
      this.checkLastElementOnDisplay(val) ? this.replaceLastElement(val) : this.addNewElement(val)
    } else {
        this.addNewElement(val)
    }
  }

    handleEqual = () => {
    const display = this.state.display;
    const lastElem = display.slice(-1);
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(lastElem) || display.length === 1) {
      console.log('')
    } else {
        this.setState(prevState => ({
          display : eval(prevState.display) 
        }))
    }
  }
  
  calculatorKeys = [
    { value: 'C', type: keyTypes.clear, action: this.clearDisplay },
    { value: 7, action: this.addToDisplay },
    { value: 8, action: this.addToDisplay },
    { value: 9, action: this.addToDisplay },
    { value: '/', type: keyTypes.operator, action: this.addToDisplay },
    { value: 6, action: this.addToDisplay },
    { value: 5, action: this.addToDisplay },
    { value: 4, action: this.addToDisplay },
    { value: '*', type: keyTypes.operator, action: this.addToDisplay },
    { value: 3, action: this.addToDisplay },
    { value: 2, action: this.addToDisplay },
    { value: 1, action: this.addToDisplay },
    { value: '-', type: keyTypes.operator, action: this.addToDisplay },
    { value: 0, action: this.addToDisplay },
    { value: '.', action: this.addToDisplay },
    { value: '=', type: keyTypes.result, action: this.handleEqual },
    { value: '+', type: keyTypes.operator, action: this.addToDisplay },
  ]

  render() {
    return (
      <div className="card">
        <header className="title">
          <h2>Calculator</h2>
        </header>
          <main>
            <DisplayComponent
               value={this.state.display}
            />
            {
              this.calculatorKeys.map(({ value, type, action }) => (
                <CalculatorKey
                  key={value}
                  value={value}
                  type={type}
                  onPressed={action}
                />
              ))
            }
          </main>
      </div>
    )
  }
}
export default CalculatorComponent;