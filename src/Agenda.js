import React, { Component } from 'react';
import DayCardHolder from './DayCardHolder';

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <div>
        <DayCardHolder />
      </div>
    );
  }
}
 
export default Agenda;