import React, {Component} from 'react';

export default class Timer3 extends Component {
  constructor(props) {
     super(props);
     this.state = {
       seconds: '00',
       minutes: '00'
     }
     // this.secondsRemaining;
     // this.intervalHandle;
     this.handleChange = this.handleChange.bind(this);
     // method that triggers the countdown functionality
     this.startCountDown = this.startCountDown.bind(this);
     this.tick = this.tick.bind(this);
   }

   handleChange() {
     let minutes = this.props.duration / this.props.periods
     this.setState({
       minutes: minutes
     })
   }
   tick() {
     var min = Math.floor(this.secondsRemaining / 60);
     var sec = this.secondsRemaining - (min * 60);
     this.setState({
       minutes: min,
       seconds: sec
     })
     if (sec < 10) {
       this.setState({
         seconds: "0" + this.state.seconds,
       })
     }
     if (min < 10) {
       this.setState({
         value: "0" + min,
       })
     }
     if (min === 0 & sec === 0) {
       clearInterval(this.intervalHandle);
     }
     this.secondsRemaining--
   }
   startCountDown() {
     this.intervalHandle = setInterval(this.tick, 1000);

     let time = this.state.minutes;

     this.secondsRemaining = time * 60;
   }

   render(){
     return(
       <div className="timer">
       <h1 className="clock">{this.state.minutes}:{this.state.seconds}</h1>
       <button onClick={this.startCountdown}>Start</button>
       </div>
     )
   }
 }
