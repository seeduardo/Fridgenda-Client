import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import { Card } from 'semantic-ui-react';


class RecipeCardHolder extends Component {
  state = {
  }

  render() {
    return (
      <div>
        <Card.Group itemsPerRow={1}>
          <RecipeCard id="recipe-card-1" key="1" title="Your Top Recipes" recipes={this.props.recipes} getClickedRecipe={this.props.getClickedRecipe}/>
          <RecipeCard id="recipe-card-2" key="2" title="Recipe of the Day" recipes={this.props.recipes} getClickedRecipe={this.props.getClickedRecipe}/>
          <RecipeCard id="recipe-card-3" key="3" title="Search/See all Recipes"/>
        </Card.Group>
      </div>
    )
  }
}

export default RecipeCardHolder;
