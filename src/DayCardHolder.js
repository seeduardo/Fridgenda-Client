import React, { Component } from 'react';
import DayCard from './DayCard';
import moment from "moment";


let firstDayOfWeek = moment().startOf("week").day(1)
let today = moment().day()
console.log(firstDayOfWeek)
console.log(today)

class DayCardHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    return <div>
        <DayCard id="1" day={firstDayOfWeek} />
        <DayCard id="2" day={firstDayOfWeek}/>
        <DayCard id="3" />
        <DayCard id="4" />
        <DayCard id="5" />
        <DayCard id="6" />
        <DayCard id="7" />
      </div>;
  }
}
 
export default DayCardHolder;