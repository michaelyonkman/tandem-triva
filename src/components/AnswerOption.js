import React from 'react';

const AnswerOption = (props) => {
  return (
    <div className="button-container">
      <button
        value={props.answerContent}
        disabled={props.answerStatus}
        onClick={props.onAnswerSelected}
      >
        {props.answerContent
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&#039;/g, "'")}
      </button>
    </div>
  );
};

export default AnswerOption;
