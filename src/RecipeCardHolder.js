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
          <RecipeCard id="recipe-card-1" key="1" title="Your Top Recipes" recipesData={this.props.recipesData} />
          <RecipeCard id="recipe-card-2" key="2" title="Recipe of the Day" recipesData={this.props.recipesData} />
          <RecipeCard id="recipe-card-3" key="3" title="See all Recipes" onClick={() => this.props.showAllRecipes()}/>
        </Card.Group>
      </div>
    )
  }
}

export default RecipeCardHolder;
