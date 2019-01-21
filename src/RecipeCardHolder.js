import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import { Card } from 'semantic-ui-react';


class RecipeCardHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <div>
        <Card.Group itemsPerRow={1}>
          <RecipeCard id="1" title="Your Top Recipes" />
          <RecipeCard id="2" title="Recipe of the Day"/>
          <RecipeCard id="3" title="Search/See all Recipes"/>
        </Card.Group>
      </div>
    )
  }
}
 
export default RecipeCardHolder;