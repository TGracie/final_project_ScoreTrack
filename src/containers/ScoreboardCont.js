import React, {Component} from 'react';
import Scoreboard from '../components/Scoreboard.js';

export default class ScoreboardCont extends Component {
  constructor(props){
    super(props);
    this.state = {
      team1: {
        score: 0,
        losingBonus: false
      },
      team2: {
        score: 0,
        losingBonus: false
      }
    } // state end
    // method bindings

  }// constructor end

  handleScore(team, value){
    let currentScore = this.state.team.score;
    let newScore = currentScore + value;
    this.setState(
      {
        team: {
          score: newScore
        }
      }
    )
  }

  // just pass down a getter

// pass down a handle score method? get the values back up, set

  render(){
    return(
      <div className="scores">
      <Scoreboard scores={this.props.scores}/>
      <Scoreboard scores={this.props.scores}/>
      </div>
    )
  }
}// class end
