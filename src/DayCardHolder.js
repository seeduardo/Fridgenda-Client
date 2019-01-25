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
          <DayCard id="monday" day={moment().startOf("week").day(1)} mealsThatDay={this.props.mealAgenda.monday} />
          <DayCard id="tuesday" day={moment().startOf("week").day(2)} mealsThatDay={this.props.mealAgenda.tuesday}/>
          <DayCard id="wednesday" day={moment().startOf("week").day(3)} mealsThatDay={this.props.mealAgenda.wednesday}/>
          <DayCard id="thursday" day={moment().startOf("week").day(4)}
            mealsThatDay={this.props.mealAgenda.thursday}/>
          <DayCard id="friday" day={moment().startOf("week").day(5)}
            mealsThatDay={this.props.mealAgenda.friday}/>
          <DayCard id="saturday" day={moment().startOf("week").day(6)}
            mealsThatDay={this.props.mealAgenda.saturday}/>
          <DayCard id="sunday" day={moment().startOf("week").day(7)}
            mealsThatDay={this.props.mealAgenda.sunday}/>
        </Card.Group>
      </div>
    )}
}

export default DayCardHolder;
