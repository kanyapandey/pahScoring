import React from 'react';

function Question(props) {

  return (
    <div>
     <h2 className="question">{props.imageUrl}</h2>
     {/* <img src={props.imageUrl} /> */}
        {/* {Object.keys(quizQuestions).map(key => (
          <div>
            {quizQuestions[key].type}
            <img src={quizQuestions[key].imageUrl} key={key} />
          </div>
        ))} */}
  </div>
  );
}


export default Question;