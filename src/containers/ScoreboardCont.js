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
    this.handleScore1 = this.handleScore1.bind(this);
    this.handleScore2 = this.handleScore2.bind(this);
    this.losingBonus = this.losingBonus.bind(this);
    this.reset1 = this.reset1.bind(this);
    this.reset2 = this.reset2.bind(this);
    this.checkLB = this.checkLB.bind(this);
  }// constructor end

  handleScore1(value){
    let currentScore = this.state.team1.score;
    let oppo = this.state.team2.score;
    let newScore = currentScore + value;
    // this.losingBonus(newScore, oppo);
    this.setState({
      team1: {
        score: newScore,
        losingBonus: this.losingBonus(oppo, newScore)
      },
      team2: {
        score: oppo,
        losingBonus: this.losingBonus(newScore, oppo)
      }
    })
  }

  handleScore2(value){
    let currentScore = this.state.team2.score;
    let oppo = this.state.team1.score;
    let newScore = currentScore + value;
    // this.losingBonus(newScore, oppo);
    this.setState({
      team1: {
        score: this.state.team1.score,
        losingBonus: this.losingBonus(newScore, oppo)
      },
      team2: {
        score: newScore,
        losingBonus: this.losingBonus(oppo, newScore)
      }
    })
  }

  losingBonus(score, opposition){
    if(score === opposition){
      return false
    }
    if((score - opposition) <= 0){
      return false
    }
    if((score - opposition) <=7){
      return true
    }
    if((score - opposition) > 7){
      return false
    }
  }

  reset1(){
    // let current = this.state.team1.score;
    // this.checkLB();
    let oppo = this.state.team2.score;
    // console.log("reset1: oppo score", oppo);
    this.setState({
      team1: {
        score: 0,
        losingBonus: this.losingBonus(oppo, 0)
      },
      team2: {
        score: oppo,
        losingBonus: false
      }
    });
    // console.log("team 1", this.state.team1.score);
  }

  reset2(){
    // this.checkLB();
    // let current = this.state.team2.score;
    let oppo = this.state.team1.score;
    // console.log("reset2: oppo score", oppo);
    this.setState({
      team1: {
        score: oppo,
        losingBonus: false
      },
      team2: {
        score: 0,
        losingBonus: this.losingBonus(oppo, 0)
      }
    });
  }

  checkLB(){
    let team1 = this.state.team1.score;
    let team2 = this.state.team2.score;
    let lb1 = this.losingBonus(team1, team2)
    let lb2 = this.losingBonus(team2, team1)

    this.setState({
      team1: {
        score: team1,
        losingBonus: lb1
      },
      team2: {
        score: team2,
        losingBonus: lb2
      }
    })
  }


  // just pass down a getter

// pass down a handle score method? get the values back up, set

  render(){
    // this.checkLB();
    return(
      <div className="scores">
      <Scoreboard scores={this.props.scores} passUp={this.handleScore1} reset={this.reset1} team={this.state.team1}/>
      <Scoreboard scores={this.props.scores} passUp={this.handleScore2} reset={this.reset2} team={this.state.team2}/>
      </div>
    )
  }
}// class end
