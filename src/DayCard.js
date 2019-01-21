import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'


class DayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    return (
      <Card color='red'>
        <Card.Content>
          <Card.Header>{this.props.day.format('dddd MMMM Do YYYY')}</Card.Header>
          <Card.Description>
            <p>Breakfast</p>
            <p>Lunch</p>
            <p>Dinner</p>
          </Card.Description>
          </Card.Content>
      </Card>
    )
  }
}
 
export default DayCard;