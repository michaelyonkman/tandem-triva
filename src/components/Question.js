import React, { useEffect } from 'react';

const Question = (props) => {
  if (props.question) {
    return (
      <div>
        <h2 className="question">{props.question}</h2>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Question;
