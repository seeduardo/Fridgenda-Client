import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import { Card } from 'semantic-ui-react';


class RecipeCardHolder extends Component {
  state = {
      recipes: [
        {title: "Pancakes"},
        {title: "Chicken Curry"},
        {title: "Black Forest Gateaux"},
        {title: "Bastard"},
        {title: "Plain Noodles"},
      ]
  }

  render() { 
    return (
      <div>
        <Card.Group itemsPerRow={1}>
          <RecipeCard key="1" title="Your Top Recipes" recipes={this.props.recipes}/>
          <RecipeCard key="2" title="Recipe of the Day" recipes={this.props.recipes}/>
          <RecipeCard key="3" title="Search/See all Recipes"/>
        </Card.Group>
      </div>
    )
  }
}
 
export default RecipeCardHolder;