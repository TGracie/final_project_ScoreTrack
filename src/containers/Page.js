import React, {Component} from 'react';
import Timer from '../components/Timer.js';
import Scoreboard from '../components/Scoreboard.js';
import ButtonBox from '../components/ButtonBox.js';

export default class Page extends Component{
  constructor(props){
    super(props); // need the super in here to make it work
    this.state = {
      rugby: {
        duration: 80,
        periods: 2,
        scores: {
          "Try": 5,
          "Conversion": 2,
          "Penalty": 3,
          "Dropgoal": 3,
          "Penalty Try": 7
        }
      }
    }
  } // constructor end

  render(){
    return(
      <div className="container">
        <h2>This is my page</h2>
        <Timer duration={this.state.rugby.duration} periods={this.state.rugby.periods}/>
        <Scoreboard/>
        <ButtonBox scores={this.state.rugby.scores}/>
      </div>
    )
  }

}// class end
