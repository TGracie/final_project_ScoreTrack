import React from 'react';

const ButtonBox = (props) => {
  if(props.scores == null || props.scores.length === 0){
    return<p>Loading score options....</p>
  }

const scores = props.scores;

let buttons = []
  for(let key in scores){
      // console.log("key: " + key + "/ score: " + scores[key]);
      buttons.push(<button className={key} value={scores[key]}>{key}</button>)
  }

  return(
    <>
    <h3>This is the Button container/box thing</h3>
    <h4>Buttons hopefully: {buttons}</h4>
    </>
  )
}

export default ButtonBox;
