import React from 'react';

const QuestionCount = (props) => {
  return (
    <div className="question-count">
      <span className="highlight-text">Question</span>{' '}
      <span className="status-highlight-text">{props.counter}</span>{' '}
      <span className="highlight-text">of</span>{' '}
      <span className="status-highlight-text">10</span>
    </div>
  );
};

export default QuestionCount;
