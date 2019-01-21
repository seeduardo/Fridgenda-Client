import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import Recipe from './Recipe';



class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  yourTopRecipes = () => {
    this.props.recipes.map(recipe => <Recipe name={recipe} />)
  }

  render() { 
    return ( 
      <Card color='red'>
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <div>
            {
              this.props.recipes
                ? this.props.recipes.map(recipe => <Recipe name={recipe} />)
                : null
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