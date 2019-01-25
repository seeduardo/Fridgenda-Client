import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import moment from "moment";
import { DragDropContext } from 'react-beautiful-dnd';
import RecipeCardHolder from './RecipeCardHolder';
import DayCardHolder from "./DayCardHolder";
import initialData from './initialData';
import RecipeSearchCard from './RecipeSearchCard';


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
    console.log(this.state, "Component did mount")
    this.getRecipes()
  }

  componentDidUpdate = () => {
    console.log(this.state, "Component did update")
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

    // if (
    //   destination.droppableId === source.droppableId &&
    //   destination.index === source.index
    // ) {
    //   return;
    // }

    const startCardData = source;
    const finishDayCardMealTime = destination.droppableId;

    this.addRecipeToMealPlan(startCardData, finishDayCardMealTime)

    // if (finishDayCardMealTime.includes("tuesday") && finishDayCardMealTime.includes("breakfast")) {
    //   console.log(this.state, "When Tuesday case is triggered")
    //   const selectedRecipeIndex = startCardData.index
    //   const selectedRecipe = this.state.recipesData.topRecipes[selectedRecipeIndex]
    //   const currentMealAgendaState = Object.assign(this.state.mealAgenda)
    //   const currentTuesdayMealPlan = Object.assign(this.state.mealAgenda.Tuesday)
      // this.setState({
      //   mealAgenda: { ...currentMealAgendaState, Tuesday: { ...currentTuesdayMealPlan, Breakfast: selectedRecipe }}
    //   })
    // }
  }

  addRecipeToMealPlan = (startCardData, finishDayCardMealTime) => {
    const day = finishDayCardMealTime.split('-')[0]
    const mealTime = finishDayCardMealTime.split('-')[1]
    const selectedRecipeIndex = startCardData.index
    const currentMealAgendaState = Object.assign(this.state.mealAgenda)
    const currentDayMealPlan = Object.assign(this.state.mealAgenda[`${day}`])


    if (startCardData.droppableId === "recipe-card-1") {
      const selectedRecipe = this.state.recipesData.topRecipes[selectedRecipeIndex]
      this.setState({
        mealAgenda: { ...currentMealAgendaState, [day]: { ...currentDayMealPlan, [mealTime]: selectedRecipe }}
      })
    } else if (startCardData.droppableId === "recipe-card-2") {
      const selectedRecipe = this.state.recipesData.recipeOfTheDay[selectedRecipeIndex]
      this.setState({
        mealAgenda: { ...currentMealAgendaState, [day]: { ...currentDayMealPlan, [mealTime]: selectedRecipe } }
      })
      }
    }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}>
        <h1 class="ui block header" >Fridgenda - It's the {moment().format("wo")} Week of {moment().format("YYYY")}</h1><br/>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <DayCardHolder mealAgenda={this.state.mealAgenda}/>
            </Grid.Column>
            <Grid.Column>
              <RecipeSearchCard />
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
