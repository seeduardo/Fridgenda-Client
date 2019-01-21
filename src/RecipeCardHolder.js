import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import { Card } from 'semantic-ui-react';


class RecipeCardHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        "Pancakes",
        "Chicken Curry",
        "Black Forest Gateaux",
        "Bastard",
        "Plain Noodles",
      ]
    }
  }

  render() { 
    return (
      <div>
        <Card.Group itemsPerRow={1}>
          <RecipeCard key="1" title="Your Top Recipes" recipes={this.state.recipes}/>
          <RecipeCard key="2" title="Recipe of the Day" recipes={this.state.recipes}/>
          <RecipeCard key="3" title="Search/See all Recipes"/>
        </Card.Group>
      </div>
    )
  }
}
 
export default RecipeCardHolder;