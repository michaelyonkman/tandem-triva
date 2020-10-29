import React from 'react';

const AnswerOption = (props) => {
  return (
    <div className="button-container">
      <button
        value={props.answerContent}
        disabled={props.isAnswered}
        onClick={props.onAnswerSelected}
      >
        {props.answerContent}
      </button>
    </div>
  );
};

export default AnswerOption;
