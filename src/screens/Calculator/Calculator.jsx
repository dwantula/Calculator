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

  addToDisplay = val => {
    this.setState(prevState => ({
    display: prevState.display + val
  }));
  };

  handleEqual = () => {
    this.setState(prevState => ({
      display : eval(prevState.display) 
    }));
  };

  // changeOfOperator = () => {
  //   const lastElem = this.state.display.slice(-1);
  //   (lastElem === '-', '+', '/', '*') ? alert('error') : this.state.display;
    

  // }

  changeOfOperator = () => {
    const lastElem = this.state.display.slice(-1);
    (3 === 3) ? console.log('aaaaa') : this.handleEqual;
    
  }
  

  calculatorKeys = [
    { value: 'C', type: keyTypes.clear,action: this.clearDisplay },
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
    { value: '=', type: keyTypes.result ,action: this.changeOfOperator },
    { value: '+', type:keyTypes.operator, action: this.addToDisplay },
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