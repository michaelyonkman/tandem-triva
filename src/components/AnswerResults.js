import React from 'react';

const AnswerResults = (props) => {
  if (props.answerStatus) {
    return (
      <div className="answer-results">
        <h2>
          {props.answerStatus === 'correct' ? (
            <span className="highlight-text">Correct!!!</span>
          ) : props.answerStatus === 'incorrect' ? (
            <span className="highlight-text">Wrong!!!</span>
          ) : (
            <span className="highlight-text">Time's Up!!!</span>
          )}{' '}
          The correct answer is{' '}
          <span className="highlight-text">{props.correctAnswer}</span>.
        </h2>
      </div>
    );
  } else {
    return null;
  }
};

export default AnswerResults;
