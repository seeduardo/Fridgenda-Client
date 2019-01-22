import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import moment from "moment";

import RecipeCardHolder from './RecipeCardHolder';
import DayCardHolder from "./DayCardHolder";
import initialData from './initialData';

class Agenda extends Component {
 state = {
   mealAgenda: initialData,
   recipes: []
  }
  
  componentDidMount = () => {
    this.getRecipes()
  }

  getRecipes = () => {
    fetch("http://localhost:3001/api/v1/recipes")
      .then(resp => resp.json())
      .then(data => {
        this.setState({recipes: data})
      })
  } 

  render() { 
    return (
      <React.Fragment>
        <h1>Fridgenda - It's the {moment().format("wo")} Week of {moment().format("YYYY")}</h1>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <DayCardHolder mealAgenda={this.state.mealAgenda}/>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <RecipeCardHolder recipes={this.state.recipes}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}
 
export default Agenda;