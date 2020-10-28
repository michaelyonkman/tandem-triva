import React from 'react';

const AnswerOption = (props) => {
  return (
    <li className="answer-option">
      <input
        type="radio"
        className="radio-button"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radio-label" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
};

export default AnswerOption;
