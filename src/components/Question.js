import React from 'react';

const Question = (props) => {
  return (
    <div className="question">
      <h2>
        {props.question
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&#039;/g, "'")}
      </h2>
    </div>
  );
};

export default Question;
