import React, {Component} from 'react';
import ButtonBox from './ButtonBox.js'

export default class Scoreboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      team1: 0,
      // team2: 0
    }
    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(value){
    let currentScore = this.state.team1;
    let newScore = parseInt(currentScore) + parseInt(value);
    this.setState(
      {team1: newScore}
    );
  }

  render(){
    // console.log(this.props);
    return(
      <div className="scoreboard">
      <h2>
      Scores {this.state.team1}
      </h2>
      <ButtonBox scores={this.props.scores} onScoreClicked={this.handleScore}/>
      </div>
    )
  }
} // class end
