import React, { Component } from 'react';
import DayCard from './DayCard';
import moment from "moment";
import { Card } from 'semantic-ui-react';


// let firstDayOfWeek = moment().startOf("week").day(1)
// let today = moment().day()

class DayCardHolder extends Component {
  state = {}


  createDayCards = () => {

  }

  render() {
    return (
      <div>
        <Card.Group itemsPerRow={1}>
          <DayCard id="day-card-1" day={moment().startOf("week").day(1)} mealsThatDay={this.props.mealAgenda.Monday} />
          <DayCard id="day-card-2" day={moment().startOf("week").day(2)} mealsThatDay={this.props.mealAgenda.Tuesday}/>
          <DayCard id="day-card-3" day={moment().startOf("week").day(3)} mealsThatDay={this.props.mealAgenda.Wednesday}/>
          <DayCard id="day-card-4" day={moment().startOf("week").day(4)}
            mealsThatDay={this.props.mealAgenda.Thursday}/>
          <DayCard id="day-card-5" day={moment().startOf("week").day(5)}
            mealsThatDay={this.props.mealAgenda.Friday}/>
          <DayCard id="day-card-6" day={moment().startOf("week").day(6)}
            mealsThatDay={this.props.mealAgenda.Saturday}/>
          <DayCard id="day-card-7" day={moment().startOf("week").day(7)}
            mealsThatDay={this.props.mealAgenda.Sunday}/>
        </Card.Group>
      </div>
    )}
}

export default DayCardHolder;
