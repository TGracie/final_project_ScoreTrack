import React from 'react';

const ButtonBox = (props) => {


  if(props.scores == null || props.scores.length === 0){
    return<p>Loading scoring options....</p>
  }

  const scores = props.scores;

  let buttons = []
    for(let key in scores){
        // console.log("key: " + key + "/ score: " + scores[key]);
        buttons.push(<button className="button" value={scores[key]} onClick={handleClick}>{key}</button>)
    }

  function handleClick(event){
    // console.log("Button value hopefully", event.target.value);
    props.onScoreClicked(event.target.value);
  }

  return(
    <>
    {buttons}
    </>
  )
}

export default ButtonBox;
