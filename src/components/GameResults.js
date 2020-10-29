import React from 'react';

const GameResults = (props) => {
  return (
    <div className="game-results">
      <h1>Game Over</h1>
      {props.score > 7 ? (
        <h1>Great Job!!!</h1>
      ) : (
        <h1>Better Luck Next Time... </h1>
      )}
      <h1>You scored {props.score} out of a possible 10.</h1>
    </div>
  );
};

export default GameResults;
