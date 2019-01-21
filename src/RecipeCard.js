import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import Recipe from './Recipe';



class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  renderSpecificCard = () => {

  }

  getRandomRecipe = () => {
    const randomRecipe =  this.props.recipes[Math.floor(Math.random() * this.props.recipes.length)]
    return <Recipe name={randomRecipe} />
  }

  yourTopRecipes = () => {
   return this.props.recipes.map((recipe, index) => <Recipe name={recipe} key={index} />)
  }

  render() { 
    return ( 
      <Card color='red'>
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <div>
            {
              this.props.title === "Your Top Recipes"
                ? this.yourTopRecipes()
                : (this.props.title === "Recipe of the Day"
                  ? this.getRandomRecipe()
                  : null)
            }
          </div>
        </Card.Content>
        
      </Card>
     );
  }
}
 
export default RecipeCard;

/*

*/