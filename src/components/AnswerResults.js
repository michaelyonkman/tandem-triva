import React from 'react';

const AnswerResults = (props) => {
  if (props.isAnswered) {
    return (
      <div className="answer-results">
        <h2>
          {props.isAnswered === 'correct' ? (
            <span className="highlight-text">Correct!!!</span>
          ) : (
            <span className="highlight-text">Wrong!!!</span>
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
