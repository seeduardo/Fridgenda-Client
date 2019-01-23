import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { Droppable } from 'react-beautiful-dnd';

import Recipe from './Recipe';



class RecipeCard extends Component {
  state = {

  }


  renderSpecificCard = () => {

  }

  // How to get index into Recipe in getRandomRecipe?

  getRandomRecipe = () => {
    if (Object.keys(this.props.recipes).length !== 0) {
      const randomRecipe =  this.props.recipes[Math.floor(Math.random() * this.props.recipes.length)]
      return <Recipe name={randomRecipe.name} id={randomRecipe.id} index={0} />
    }
  }

  yourTopRecipes = () => {
    const topFiveRecipes = this.props.recipes.slice(0, 5)
    return topFiveRecipes.map((recipe, index) => <Recipe name={recipe.name} key={index} id={recipe.id} index={index} />)
  }

  render() {
    return (
      <Card color='red'>
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <Droppable droppableId={this.props.id} >
            {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                this.props.title === "Your Top Recipes"
                  ? this.yourTopRecipes()
                  : (this.props.title === "Recipe of the Day"
                    ? this.getRandomRecipe()
                    : null)
              }
              {provided.placeholder}
            </div>
            )}
          </Droppable>
        </Card.Content>

      </Card>
     );
  }
}

export default RecipeCard;

/*

*/
