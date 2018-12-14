import React, {Component} from 'react';
import ButtonBox from './ButtonBox.js'

export default class Scoreboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      team1: 0,
      lastOp: 0
    }
    this.handleScore = this.handleScore.bind(this);
    this.oops = this.oops.bind(this);
  }

  handleScore(value){
    let currentScore = this.state.team1;
    let newScore = parseInt(currentScore) + parseInt(value);
    this.setState(
      {team1: newScore,
       lastOp: value}
    );
  }

  oops(){
    let currentScore = this.state.team1;
    let newScore = parseInt(currentScore) - parseInt(this.state.lastOp);
    if(this.state.team1 > 0){
    this.setState({
      team1: newScore
    })
  }
  }

  render(){
    // console.log(this.props);
    return(
      <div className="scoreboard">
      <h2 className="nums">
      {this.state.team1}
      </h2>
      <ButtonBox scores={this.props.scores} onScoreClicked={this.handleScore}/>
      <button className="button" value={this.state.lastOp} onClick={this.oops}>Undo</button>
      </div>
    )
  }
} // class end
