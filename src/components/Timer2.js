const React = require('react')
export default class Timer2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.millisecondsToTime = this.millisecondsToTime.bind(this)
  }

  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 0, isOn: false})
  }

  millisecondsToTime()
  {
      let milli = this.state.time;
      var seconds = Math.floor((milli / 1000) % 60);
      var minutes = Math.floor((milli / (60 * 1000)) % 60);

      if(seconds < 10){
        seconds = "0" + seconds;
      }
      if (minutes < 10){
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconds;
    }

  render() {
    // console.log("Prettier time?", this.millisecondsToTime());
    let start = (this.state.time === 0) ?
      <button className="start" onClick={this.startTimer}>START</button> :
      null

    let stop = (this.state.time === 0 || !this.state.isOn) ?
      null :
      <button className="stop" onClick={this.stopTimer}>STOP</button>

    let resume = (this.state.time === 0 || this.state.isOn) ?
      null :
      <button className="start" onClick={this.startTimer}>RESUME</button>

    let reset = (this.state.time === 0 || this.state.isOn) ?
      null :
      <button className="reset" onClick={this.resetTimer}>RESET</button>

    let time = this.millisecondsToTime();

    return(
      <div className="timer">
        <h3>Time Played</h3>
        {time}
        <br/>
        <br/>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}
