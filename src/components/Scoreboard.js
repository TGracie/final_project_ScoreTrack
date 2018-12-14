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
      <>
      <h2 className="scoreboard">
      Scores {this.state.team1}
      </h2>
      <ButtonBox scores={this.props.scores} onScoreClicked={this.handleScore}/>
      </>
    )
  }
} // class end




// const Scoreboard = (props) => {
  //   return(
    //     <>
    //     <h3>This is the Scoreboard</h3>
    //     <h4>It goes below the timer</h4>
    //     </>
    //   )
    // }
