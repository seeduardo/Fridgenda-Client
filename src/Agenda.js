import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import moment from "moment";
import { DragDropContext } from 'react-beautiful-dnd';
import RecipeCardHolder from './RecipeCardHolder';
import DayCardHolder from "./DayCardHolder";
import initialData from './initialData';
import Recipe from './Recipe';


class Agenda extends Component {
 state = {
   mealAgenda: initialData,
   recipesData: {
    allRecipes: [],
    topRecipes: [],
    recipeOfTheDay: []
   }
  }

  componentDidMount = () => {
    this.getRecipes()
  }

  getRecipes = () => {
    fetch("http://localhost:3001/api/v1/recipes")
      .then(resp => resp.json())
      .then(data => {
        const currentRecipesDataState = Object.assign(this.state.recipesData)
        this.setState({
          recipesData: {...currentRecipesDataState, allRecipes: data}
        })
      })
    .then(() => {
      this.setTopRecipes()
      this.setRecipeOfTheDay()
    })
  }

  setRecipeOfTheDay = () => {
    const randomNotReallyRandom = this.state.recipesData.allRecipes.slice(17, 18)
    const currentRecipesDataState = Object.assign(this.state.recipesData)
    this.setState({
      recipesData: { ...currentRecipesDataState, recipeOfTheDay: randomNotReallyRandom }
    })
  }

  setTopRecipes = () => {
    const topFiveRecipes = this.state.recipesData.allRecipes.slice(0, 5)
    const currentRecipesDataState = Object.assign(this.state.recipesData)
    this.setState({
      recipesData: { ...currentRecipesDataState, topRecipes: topFiveRecipes }
    })
  }

  onDragEnd = result => {
    console.log(result);

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startCard = source;
    const finishDayCardMeal = destination.droppableId;
    // const newState = state.mealAgenda[targetDayCard][targetdaycardmeal] = recipethatwasdragged
    // this.setState(...this.state, something: newState )

    if (finishDayCardMeal.includes("tuesday") && finishDayCardMeal.includes("breakfast")) {
      console.log(this.state)
      const selectedRecipeIndex = startCard.index
      const selectedRecipe = this.state.recipesData.topRecipes[selectedRecipeIndex]
      const currentMealAgendaState = Object.assign(this.state.mealAgenda)
      const currentTuesdayMealPlan = Object.assign(this.state.mealAgenda.Tuesday)
      this.setState({
        mealAgenda: { ...currentMealAgendaState, Tuesday: {...currentTuesdayMealPlan, Breakfast: selectedRecipe} }
      })
      console.log(this.state, "Second Log");
    }

  }


  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}>
        <h1>Fridgenda - It's the {moment().format("wo")} Week of {moment().format("YYYY")}</h1>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <DayCardHolder mealAgenda={this.state.mealAgenda}/>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <RecipeCardHolder recipesData={this.state.recipesData} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </DragDropContext>
    )
  }
}

export default Agenda;
