import React, { Component } from 'react';
import './Box.css';
import { generateRandom}from './helpers';
class Box extends Component {
  static defaultProps = {
    allColors: ['purple', 'magenta', 'blue', 'pink']
  }
  constructor(props) { 
    super(props);
    this.state = { color: generateRandom() };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(event) {
    let newColor; 
    do {
      newColor = generateRandom();
    } while (newColor===this.state.color);
  
  this.setState({ color: newColor });
}
  render() { 
    return (<div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}></div>  );
  }
}
 
export default Box;
