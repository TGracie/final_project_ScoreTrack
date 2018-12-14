import React, {Component} from 'react';
import ButtonBox from './ButtonBox.js'

export default class Scoreboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      teamName: 'Team',
      named: false,
      score: 0,
      lastOp: 0
    }
    this.handleScore = this.handleScore.bind(this);
    this.oops = this.oops.bind(this);
  }

  handleScore(value){
    let currentScore = this.state.team1;
    let newScore = parseInt(currentScore) + parseInt(value);
    this.setState(
      {score: newScore,
       lastOp: value,
      }
    );
  }

  oops(){
    let currentScore = this.state.score;
    let newScore = parseInt(currentScore) - parseInt(this.state.lastOp);

      if(this.state.score - this.state.lastOp > 0){
        this.setState({
          score: newScore
        })
      }else{
        this.setState({
          score: 0
          })
        }
  }

  render(){
    // console.log(this.props);
    return(
      <div className="scoreboard">
      <h4>{this.state.teamName}</h4>
      <h3 className="nums">
      {this.state.score}
      </h3>
      <ButtonBox scores={this.props.scores} onScoreClicked={this.handleScore}/>
      <button className="button" value={this.state.lastOp} onClick={this.oops}>Undo</button>
      </div>
    )
  }
} // class end
