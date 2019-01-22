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
          <div>
            <div>
              <p>Breakfast:</p>
              <p>{this.props.mealsThatDay.Breakfast.title}</p>
            </div>
            <div>
              <p>Lunch:</p>
              <p>{this.props.mealsThatDay.Lunch.title}</p>
            </div>
            <div>
              <p>Dinner:</p>
              <p>{this.props.mealsThatDay.Dinner.title}</p>
            </div>
          </div>
          </Card.Content>
      </Card>
    )
  }
}
 
export default DayCard;