import React from 'react';

const AnswerResults = (props) => {
  if (props.isAnswered) {
    if (props.isAnswered === 'true') {
      return (
        <div className="correct-answer">
          <h1>Congrats!!! The correct answer is {props.correctAnswer}.</h1>
        </div>
      );
    } else {
      return (
        <div className="wrong-answer">
          <h1>Booo!!! The correct answer was {props.correctAnswer}.</h1>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default AnswerResults;
