import React, { Component } from 'react';

class Recipe extends Component {
  state={}

  render() { 
    return (
      <p>{this.props.name}</p>
    )
  }
}

export default Recipe;