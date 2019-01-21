import React, { Component } from 'react';
import DayCardHolder from './DayCardHolder';
import { Grid } from 'semantic-ui-react'
import RecipeCardHolder from './RecipeCardHolder';


class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={3}>
          <Grid.Column>
            <DayCardHolder />
          </Grid.Column>
          <Grid.Column>
            <RecipeCardHolder />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
 
export default Agenda;