import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'


class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Card color='red'>
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Description>
            <p>Pancakes</p>
            <p>Chicken Curry</p>
            <p>Bastard</p>
          </Card.Description>
        </Card.Content>
      </Card>
     );
  }
}
 
export default RecipeCard;