import React, { PureComponent } from 'react';
import './styles.scss';

class DisplayComponent extends PureComponent {
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div className="display">
        <p>{this.props.value}</p>
      </div>
    )
  }
}
export default DisplayComponent;