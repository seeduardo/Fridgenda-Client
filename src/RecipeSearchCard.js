import React, { Component } from 'react';
import { Card, Container, CardContent } from 'semantic-ui-react'

class RecipeSearchCard extends Component {
  state = {}

  render() { 
    return (
      <Card >
        <Card.Content>
          <Card.Header>Recipes List</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}
 
export default RecipeSearchCard;