import React, { PureComponent } from 'react';
import ButtonComponent from './../shared/components/Button/Button';
import './styles.scss';

class CalculatorComponent extends PureComponent {
  render() {
    return (
      <div className="card">
      <header className= "title">
        <h2>Calculator</h2>
      </header>
      <main>
        <ButtonComponent
        className="button clear-button"
        text="C"
         />
        <td class="display">0</td>
        <ButtonComponent
        className="button"
        text="7"
         />
        <ButtonComponent
        className="button"
        text="8"
         />
        <ButtonComponent
        className="button"
        text="9"
         />
        <ButtonComponent
        className="button function-button"
        text="/"
         />
        <ButtonComponent
        className="button"
        text="4"
         />
        <ButtonComponent
        className="button"
        text="5"
         />
        <ButtonComponent 
        className="button"
        text="6"
        />
        <ButtonComponent
        className="button function-button"
        text="*"
         />
        <ButtonComponent
        className="button"
        text="1"
         />
        <ButtonComponent
        className="button"
        text="2"
         />
        <ButtonComponent
        className="button"
        text="3"
         />
        <ButtonComponent
        className="button function-button"
        text="-"
         />
        <ButtonComponent
        className="button"
        text="0"
         />
        <ButtonComponent
        className="button"
        text="."
         />
        <ButtonComponent
        className="button result-button"
        text="="
         />
        <ButtonComponent
        className="button function-button"
        text="+"
         />
      </main>
    </div>

    )
  }
}
export default CalculatorComponent