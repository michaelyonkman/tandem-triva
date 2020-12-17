import React from 'react';
const he = require('he');

const Question = (props) => {
  return (
    <div className="question">
      <h2>{he.decode(props.question)}</h2>
    </div>
  );
};

export default Question;
