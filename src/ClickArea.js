import React, { Component } from 'react';

const agendaMemoNote = 'http://localhost:3000/AgendaMemoNote.jpg'

  class ClickArea extends Component {
    render() {
      const {handleAgendaClick} = this.props
      return(
        <img onClick={() => handleAgendaClick()}className="agenda-note-image" src={agendaMemoNote} alt="Agenda Note"/>
      )
    }
  }

export default ClickArea
