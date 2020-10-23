import React, { PureComponent } from 'react';
import './styles.scss';

class DisplayComponent extends PureComponent {
  render() {
    return (
      <div className="display">
        <p>{this.props.value}</p>
      </div>
    )
  }
}
export default DisplayComponent;