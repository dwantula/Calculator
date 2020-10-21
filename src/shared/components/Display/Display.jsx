import React, { PureComponent } from 'react';
import './styles.scss'

class DisplayComponent extends PureComponent {
  constructor(props) {
    super(props);
  
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <input
        type={this.props.type} 
        value={this.props.value} 
        onChange={this.handleChange}
        className="display">
      </input>
      
    )
  }
}
export default DisplayComponent;