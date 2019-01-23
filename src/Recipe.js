import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';


class Recipe extends Component {
  state={}

  render() {
    return (
      <Draggable draggableId={this.props.id}
       index={this.props.index} >
        { (provided) => (
          <p
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.name}
          </p>
        )}
      </Draggable>
      )
  }
}

export default Recipe;
