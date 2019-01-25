import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react'
import { Droppable } from 'react-beautiful-dnd';
import Recipe from './Recipe';



class RecipeCard extends Component {
  state = {

  }

  getRandomRecipe = () => {
    const randomNotReallyRandom = this.props.recipesData.recipeOfTheDay
    return randomNotReallyRandom.map((recipe, index) => <Recipe name={recipe.name} key={index} id={recipe.id} index={index} />)
  }

  yourTopRecipes = () => {
    const topFiveRecipes = this.props.recipesData.topRecipes
    return topFiveRecipes.map((recipe, index) => <Recipe name={recipe.name} key={index} id={`${recipe.id}-top`} index={index} />)
  }

  render() {
    return (
      <Card 
        className='paper-card' 
        onClick={this.props.title === 'See all Recipes' 
        ? () => this.props.showAllRecipes()
        : null}
      >
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <Container>
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
          </Container>
        </Card.Content>
      </Card>
     );
  }
}

export default RecipeCard;

/*

*/
