import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <p>{this.props.name}</p>
    )
  }
}
 
export default Recipe;