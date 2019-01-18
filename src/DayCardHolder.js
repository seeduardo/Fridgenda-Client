import React, { Component } from 'react';
import DayCard from './DayCard';

class DayCardHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return( 
      <div>
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </div>
    )
  }
}
 
export default DayCardHolder;