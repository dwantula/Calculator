import React, { PureComponent } from 'react';
import './styles.scss';

class ButtonComponent extends PureComponent {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}

export default ButtonComponent;
