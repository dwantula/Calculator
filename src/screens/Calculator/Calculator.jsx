import React, { PureComponent } from 'react';
import ButtonComponent from '../../shared/components/Button/Button';
import ClearButtonComponent from '../../shared/components/ClearButton/ClearButton';
import DisplayComponent from '../../shared/components/Display/Display';
import './styles.scss';

class CalculatorComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    };
  };

  onDisplayChange = value => {
    this.setState({ display: value });
  }

  clearDisplay = () => {
    this.setState({ display: '' });
  }

  addToDisplay = val => {
    this.setState({ display: this.state.display + val });
  };

  handleEqual = () => {
    this.setState({ display: eval(this.state.display) });
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
              value={this.state.display} 
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