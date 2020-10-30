import React from 'react';

const Score = (props) => {
  return (
    <div className="score">
      <span className="highlight-text">Score {props.score}</span>
    </div>
  );
};

export default Score;
