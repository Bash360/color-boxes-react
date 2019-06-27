import React, { Component } from 'react';
import Box from './Box.js';
class BoxContainer extends Component {
  static defaultProps = { numbOfBoxes: ' '.repeat(20) };

  render() {
    let arr = this.props.numbOfBoxes.split('');
    let boxes = arr.map((currenItem, index) => <Box key={index} /> );
    
  
    return <React.Fragment> { boxes }</React.Fragment>;
  }
}
 
export default BoxContainer;
