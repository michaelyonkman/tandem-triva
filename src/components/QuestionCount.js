import React from 'react';

const QuestionCount = (props) => {
  return (
    <div className="question-count">
      <span className="highlight-text">
        Question <span>{props.counter}</span> of 10
      </span>
    </div>
  );
};

export default QuestionCount;
