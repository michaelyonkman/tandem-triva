import React from 'react';

const AnswerResults = (props) => {
  if (props.isAnswered) {
    if (props.isAnswered === 'true') {
      return (
        <div className="answer-results">
          <h2>
            Correct!!! The correct answer is{' '}
            <span className="highlight-text">{props.correctAnswer}</span>.
          </h2>
        </div>
      );
    } else {
      return (
        <div className="answer-results">
          <h2>
            Wrong!!! The correct answer is{' '}
            <span className="highlight-text">{props.correctAnswer}</span>.
          </h2>
        </div>
      );
    }
  } else {
    return <div className="answer-results"></div>;
  }
};

export default AnswerResults;
