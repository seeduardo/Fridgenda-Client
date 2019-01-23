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

                  <Draggable draggableId={`${this.props.id}`}
                   index={0} >
                    { (provided) => (
                      <p
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {this.props.mealsThatDay.Breakfast.title}
                      </p>
                    )}
                  </Draggable>
                  {provided.placeholder}
                </div>
                )}
              </Droppable>
              <Droppable droppableId={`${this.props.id}-lunch`} >
                {(provided) => (
                <div ref={provided.innerRef}
                {...provided.droppableProps}>
                  <p>Lunch:</p>

                  <Draggable draggableId={this.props.id}
                   index={1} >
                    { (provided) => (
                      <p
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {this.props.mealsThatDay.Lunch.title}
                      </p>
                    )}
                  </Draggable>

                  {provided.placeholder}
                </div>
                )}
              </Droppable>
              <Droppable droppableId={`${this.props.id}-dinner`} >
                {(provided) => (
                <div ref={provided.innerRef}
                {...provided.droppableProps}>
                  <p>Dinner:</p>

                  <Draggable draggableId={this.props.id}
                   index={2} >
                    { (provided) => (
                      <p
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {this.props.mealsThatDay.Dinner.title}
                      </p>
                    )}
                  </Draggable>

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
