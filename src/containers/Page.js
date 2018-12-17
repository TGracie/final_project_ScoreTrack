import React, {Component} from 'react';
// import Timer3 from '../components/Timer3.js';
import Timer2 from '../components/Timer2.js';
import Scoreboard from '../components/Scoreboard.js';
// import Example from '../components/Example.js';

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

    // method bindings in here

  } // constructor end

  render(){
    return(
      <div className="container">
        <h2 className="title">ScoreTrack</h2>
          <div className="scores">
          <Scoreboard scores={this.state.rugby.scores}/>
          <Scoreboard scores={this.state.rugby.scores}/>
          </div>
          <Timer2 className="timer" duration={this.state.rugby.duration} periods={this.state.rugby.periods}/>
      </div>
    )
  }

}// class end

// <Example playTime={this.state.rugby.duration} periods={this.state.rugby.periods}/>
// <Timer3 duration={this.state.rugby.duration} periods={this.state.rugby.periods}/>
// <ButtonBox scores={this.state.rugby.scores}/>
