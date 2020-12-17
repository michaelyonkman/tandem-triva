import React from 'react';
const he = require('he');

const AnswerOption = (props) => {
  return (
    <div className="button-container">
      <button
        value={props.answerContent}
        disabled={props.answerStatus}
        onClick={props.onAnswerSelected}
      >
        {he.decode(props.answerContent)}
      </button>
    </div>
  );
};

export default AnswerOption;
