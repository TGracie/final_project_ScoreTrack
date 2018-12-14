import React, {Component} from 'react';
// const ms = require('pretty-ms');


export default class Timer extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    } // state end
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }// constructor end

  startTimer(){
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }

  stopTimer(){
    this.setState({isOn: false})
    clearInterval(this.timer)
    }

  resetTimer(){
    this.setState({time: 0, isOn: false})
  }


render(){

  let start = (this.state.time == 0) ?
  <button onClick={this.startTimer}>Start</button>:
  null

  let stop = (this.state.time == 0 || !this.state.isOn) ?
  null:
  <button onClick={this.stopTimer}>Stop</button>

  let resume = (this.state.time == 0 || this.state.isOn) ?
  null:
  <button onClick={this.startTimer}>Resume</button>

  let reset = (this.state.time == 0 || this.state.isOn) ?
  null:
  <button onClick={this.resetTimer}>Reset</button>
  return(
    <div className="timer">
      <h3>Timer: {this.state.time}</h3>
      {start}
      {resume}
      {stop}
      {reset}
    </div>
  )
}

}// class end



// const Timer = (props) => {
  //   return(
    //     <>
    //     <h3>This is the timer</h3>
    //     <p>Recieving the duration data from the page {props.duration}</p>
    //     <p>Recieving the periods data from the page {props.periods}</p>
    //     <h4>It is inside the page</h4>
    //     </>
    //   )
    // }
// export default Timer;
