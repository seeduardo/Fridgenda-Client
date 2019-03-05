import React, { Component } from 'react';
import { Card, Container, CardContent } from 'semantic-ui-react'
import { Droppable } from 'react-beautiful-dnd';
import Recipe from './Recipe';



class RecipeSearchCard extends Component {
  state = {}

  render() { 
    return (
      <Card.Group itemsPerRow={1}>
        <Card className='paper-card' >
          <Card.Content>
            <Card.Header>Recipes List</Card.Header>
            <Container>
              <h5 onClick={this.props.showAllRecipes}>Click here to go back</h5>
              <Droppable droppableId={this.props.id} >
                {(provided) => (
                  <div
                    className='recipeList'
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {
                      this.props.recipesData.allRecipes.map((recipe, index) => <Recipe name={recipe.name} key={index} id={recipe.id} index={index} />)
                    }
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Container>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}
 
export default RecipeSearchCard;