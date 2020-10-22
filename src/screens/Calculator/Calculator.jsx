import React, { PureComponent } from 'react';
import ButtonComponent from '../../shared/components/Button/Button';
import ClearButtonComponent from '../../shared/components/ClearButton/ClearButton';
import DisplayComponent from '../../shared/components/Display/Display';
import './styles.scss';

class CalculatorComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  };

  onDisplayChange = value => {
    this.setState({ result: value });
  }

  clearDisplay = () => {
    this.setState({ result: '' });
  }

  addToDisplay = val => {
    this.setState({ result: this.state.result + val });
  };

  handleEqual = () => {
    this.setState({ result: eval(this.state.result) });
  };

  render() {
    return (
      <div className="card">
        <header className="title">
          <h2>Calculator</h2>
        </header>
          <main>
            <ClearButtonComponent
             className="clear-button"
             handleClear={this.clearDisplay}>
              C
            </ClearButtonComponent>   
            <DisplayComponent
              onChange={this.onDisplayChange}
              value={this.state.result} 
            />
            <ButtonComponent 
              handleClick={this.addToDisplay}>
              7
            </ButtonComponent>
            <ButtonComponent 
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
            </ButtonComponent>
          </main>
      </div>
    )
  }
}
export default CalculatorComponent;