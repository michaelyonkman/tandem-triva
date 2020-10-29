import React from 'react';

const Score = (props) => {
  return (
    <div>
      <h3 className="score">Score: {props.score}</h3>
    </div>
  );
};

export default Score;
