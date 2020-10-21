import React, { PureComponent } from 'react';
import ButtonComponent from '../../shared/components/Button/Button';
import DisplayComponent from '../../shared/components/Display/Display';
import './styles.scss';

class CalculatorComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      result: '111',
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }

  onInputChange(value) {
    this.setState({ result: value });
  }

  clearDisplay() {
    this.setState({ result: [] });
  }

  render() {
    return (
      <div className="card">
        <header className= "title">
          <h2>Calculator</h2>
        </header>
          <main>
            <ButtonComponent
              className="clear-button"
              text="C"
              onClick={this.clearDisplay}
            />
            <DisplayComponent
              value={this.state.result} 
              onChange={this.onInputChange}
            />
            <ButtonComponent
              text="7"
            />
            <ButtonComponent
              text="8"
            />
            <ButtonComponent
              text="9"
            />
            <ButtonComponent
              className="function-button"
              text="/"
            />
            <ButtonComponent
              text="4"
            />
            <ButtonComponent
              text="5"
            />
            <ButtonComponent 
              text="6"
            />
            <ButtonComponent
              className="function-button"
              text="*"
            />
            <ButtonComponent
              text="1"
            />
            <ButtonComponent
              text="2"
            />
            <ButtonComponent
              text="3"
            />
            <ButtonComponent
              className="function-button"
              text="-"
            />
            <ButtonComponent
              text="0"
            />
            <ButtonComponent
              text="."
            />
            <ButtonComponent
              className="result-button"
              text="="
            />
            <ButtonComponent
              className="function-button"
              text="+"
            />
          </main>
      </div>
    )
  }
}
export default CalculatorComponent