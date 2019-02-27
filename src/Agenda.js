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
   },
   allRecipesClicked: false,
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

  showAllRecipes = () => {
    const clickedStatus = this.state.allRecipesClicked
    this.setState({allRecipesClicked: !clickedStatus})
  }

  onDragEnd = result => {
    console.log(result);

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId.includes("recipe") && source.droppableId.includes("recipe")
    ) {
      return;
    }

    const startCardData = source;
    const finishDayCardMealTime = destination.droppableId;

    this.addRecipeToMealPlan(startCardData, finishDayCardMealTime)

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
    } else if (startCardData.droppableId === "recipe-search-card") {
        const selectedRecipe = this.state.recipesData.allRecipes[selectedRecipeIndex]
        this.setState({
          mealAgenda: { ...currentMealAgendaState, [day]: { ...currentDayMealPlan, [mealTime]: selectedRecipe } }
        })
      }
    }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}>
        <h1 className="ui block header" >Fridgenda - It's the {moment().format("wo")} Week of {moment().format("YYYY")}</h1><br/>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <DayCardHolder mealAgenda={this.state.mealAgenda}/>
            </Grid.Column>
            <Grid.Column>
              {
                this.state.allRecipesClicked
                ? <RecipeSearchCard id='recipe-search-card' recipesData={this.state.recipesData} />
                : <RecipeCardHolder recipesData={this.state.recipesData} showAllRecipes={this.showAllRecipes} />
              }
            </Grid.Column>
            
          </Grid.Row>
        </Grid>
      </DragDropContext>
    )
  }
}

export default Agenda;
