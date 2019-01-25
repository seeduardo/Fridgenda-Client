import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { Draggable } from 'react-beautiful-dnd';


class Recipe extends Component {
  state={}

  render() {
    return (

          <Draggable draggableId={this.props.id}
           index={this.props.index} >
            { (provided) => (
              <Card className='paper-card'>
                <Card.Content>
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                {this.props.name}
              </div>
              </Card.Content>
            </Card>
            )}
          </Draggable>

      )
  }
}

export default Recipe;
