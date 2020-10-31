import React from 'react';

const Timer = (props) => {
  return (
    <div className="timer">
      <span className="highlight-text">Time</span>
      <span className="status-highlight-text"> {props.timer}</span>
    </div>
  );
};

export default Timer;
