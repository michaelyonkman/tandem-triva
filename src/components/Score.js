import React from 'react';

const Score = (props) => {
  return (
    <div className="score">
      <span className="highlight-text">Score</span>
      <span className="status-highlight-text"> {props.score}</span>
    </div>
  );
};

export default Score;
