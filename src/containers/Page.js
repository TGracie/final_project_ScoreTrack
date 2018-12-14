import React, {Component} from 'react';
import Timer from '../components/Timer.js';
import Scoreboard from '../components/Scoreboard.js';
import ButtonBox from '../components/ButtonBox.js';

export default class Page extends Component{
  constructor(props){
    super(props); // need the super in here to make it work
    this.state = [{
      rugby: {
        duration: 80,
        periods: 2,
        scores: {
          try: 5,
          conversion: 2,
          penalty: 3,
          dropgoal: 3,
          penTry: 7
        }
      }
    }]
  } // constructor end

  render(){
    return(
      <div className="container">
        <h2>This is my page</h2>
        <Timer duration={this.state[0].rugby.duration} periods={this.state[0].rugby.periods}/>
        <Scoreboard/>
        <ButtonBox/>
      </div>
    )
  }

}// class end
