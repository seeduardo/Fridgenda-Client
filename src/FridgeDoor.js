import React, { Component } from 'react';
import ClickArea from './ClickArea'

const fridgeDoorPic = 'http://localhost:3000/FirstSecondTry.jpg'

class FridgeDoor extends Component {
  render() {
    const {handleAgendaClick} = this.props
    return (
      <div className="FridgeDoor">
        <h1>WELCOME TO FRIDGENDA OH HUNGRY ONE</h1>
        <h3>Here is where you can plan all your week's meals with delicious recipes, whether new and adventurous, or tried, tested and loved. To get started, just click on the agenda stuck on the fridge door below.</h3>
        <img className="fridge-door-image" src={fridgeDoorPic} alt="Fridge Door"/>
        <ClickArea handleAgendaClick={handleAgendaClick} className="click-area"/>
      </div>
    )
  }
}

export default FridgeDoor
