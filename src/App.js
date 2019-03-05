import React, { Component } from 'react';
import './App.css';
import Agenda from './Agenda';
import FridgeDoor from './FridgeDoor';

class App extends Component {

  state = {
    agendaClicked: false
  }

  handleAgendaClick = () => {
    this.setState({
      agendaClicked: true
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.agendaClicked
        ? <Agenda />
        : <FridgeDoor handleAgendaClick={this.handleAgendaClick}/>}
      </div>
    );
  }
}

export default App;
