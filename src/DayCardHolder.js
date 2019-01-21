import React, { Component } from 'react';
import DayCard from './DayCard';
import moment from "moment";
import { Card } from 'semantic-ui-react';


// let firstDayOfWeek = moment().startOf("week").day(1)
// let today = moment().day()

class DayCardHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  createDayCards = () => {

  }

  render() { 
    return (
      <div>
        <h1>It's the {moment().format("wo")} Week of {moment().format("YYYY")}</h1>
        <Card.Group itemsPerRow={1}>
          <DayCard id="1" day={moment().startOf("week").day(1)} />
          <DayCard id="2" day={moment().startOf("week").day(2)}/>
          <DayCard id="3" day={moment().startOf("week").day(3)}/>
          <DayCard id="4" day={moment().startOf("week").day(4)}/>
          <DayCard id="5" day={moment().startOf("week").day(5)}/>
          <DayCard id="6" day={moment().startOf("week").day(6)}/>
          <DayCard id="7" day={moment().startOf("week").day(7)}/>
        </Card.Group>
      </div>
    )}
}
 
export default DayCardHolder;