import React from 'react';

function AnswerOption(props) {

  return (
    <li className="answerOption">
      <button id="horizontal-list"
        type="button"
        id={props.answerType}
        value={props.index}
        className={(props.selectedAnswer === props.index) ? 'selected-btn' : '' }
        onClick={props.onAnswerSelected}
      ><img src={props.answerContent} style={{width:'100px',height:'100px'}}/></button>
    </li>
  );

}

export default AnswerOption;