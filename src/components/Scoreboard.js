import React, {Component} from 'react';
import ButtonBox from './ButtonBox.js'

export default class Scoreboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      teamName: 'Team',
      named: false,
      score: 0,
      lastOp: 0,
      tries: 0
    }
    this.handleScore = this.handleScore.bind(this);
    this.oops = this.oops.bind(this);
    this.reset = this.reset.bind(this);
    this.setTeamName = this.setTeamName.bind(this);
    this.tryCount = this.tryCount.bind(this);
    this.tryCheck = this.tryCheck.bind(this);
    this.resetName = this.resetName.bind(this);
  }

  handleScore(event){
    this.tryCount(event.target.name);
    let value = parseInt(event.target.value);
    let currentScore = this.state.score;
    let newScore = currentScore + value;
    this.passingUp(value);
    this.setState(
      {score: newScore,
       lastOp: value,
      }
    );
  }

  passingUp(value){
    this.props.passUp(value);
  }

  tryCount(name){
    // console.log("name", name);
    if(name === "Try"){
      this.setState({
        tries: this.state.tries + 1
      })
    }
    if(name === "Penalty Try"){
      this.setState({
        tries: this.state.tries + 1
      })
    }
  }

  tryCheck(){
    if(this.state.lastOp === 5){
      this.setState({
        tries: this.state.tries - 1
      })
    }
    if(this.state.lastOp === 7){
      this.setState({
        tries: this.state.tries - 1
      })
    }
  }

  // add an if for value = 5 or 7 to ++ the tries counter?

  oops(){
    let currentScore = this.state.score;
    let newScore = currentScore - this.state.lastOp;
    this.tryCheck()
    this.passingUp(this.state.lastOp * -1)
      if(this.state.score - this.state.lastOp > 0){
        this.setState({
          score: newScore,
          lastOp: 0
        })
      }else{
        this.setState({
          score: 0
          })
        }
  }

  reset(){
    this.props.reset();
    this.setState(
      {score: 0,
      tries: 0}
    )
  }

  setTeamName(event){
    const form = event.target;
    this.setState(
      {teamName: form["Team-Name"].value,
       named: true}
    )
  }

  resetName(){
    this.setState(
      {teamName: 'Team',
       named: false}
    )
  }

  render(){
    let bonus = (this.state.tries >= 4) ?
            "BP"
            :
            null;

    let form = (this.state.named === false) ?
              <form onSubmit={this.setTeamName}>
              <input type="text" name="Team-Name" placeholder="Enter Team Name"/>
              </form>
              :
              null;

    let lb = (this.props.team.losingBonus === true) ?
            <h6>Losing Bonus</h6>
            :
            null;

    return(
      <div className="scoreboard">
      {form}
      <h3 onClick={this.resetName}>{this.state.teamName}</h3>
      <h3 className="nums">
      {this.state.score}
      </h3>
      <h5>Try Count: {this.state.tries} {bonus}</h5>
      {lb}
      <ButtonBox scores={this.props.scores} onScoreClicked={this.handleScore}/>
      <button className="undo-button" value={this.state.lastOp} onClick={this.oops}>Undo</button>
      <button className="reset-button" onClick={this.reset}>Reset</button>
      </div>
    )
  }
} // class end
