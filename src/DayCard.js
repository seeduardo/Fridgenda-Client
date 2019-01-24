import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Droppable, Draggable } from 'react-beautiful-dnd';



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
          <Container>
              <div>
              <Droppable droppableId={`${this.props.id}-breakfast`} >
                {(provided) => (
                <div ref={provided.innerRef}
                {...provided.droppableProps}>
                  <p>Breakfast:</p>
                  <p>{this.props.mealsThatDay.Breakfast.title}</p>
                  {provided.placeholder}
                </div>
                )}
              </Droppable>
              <Droppable droppableId={`${this.props.id}-lunch`} >
                {(provided) => (
                <div ref={provided.innerRef}
                {...provided.droppableProps}>
                  <p>Lunch:</p>
                  <p>{this.props.mealsThatDay.Lunch.title}</p>
                  {provided.placeholder}
                </div>
                )}
              </Droppable>
              <Droppable droppableId={`${this.props.id}-dinner`} >
                {(provided) => (
                <div ref={provided.innerRef}
                {...provided.droppableProps}>
                  <p>Dinner:</p>
                  <p>{this.props.mealsThatDay.Dinner.title}</p>
                  {provided.placeholder}
                </div>
                )}
              </Droppable>
              </div>
          </Container>
          </Card.Content>
      </Card>
    )
  }
}

export default DayCard;
