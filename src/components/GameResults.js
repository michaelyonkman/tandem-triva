import React from 'react';

const GameResults = (props) => {
  return (
    <div className="game-results">
      {props.score > 200 ? (
        <h1>Great job!!!</h1>
      ) : (
        <h1>Better luck next time... </h1>
      )}
      <h2>
        You scored <span className="highlight-text">{props.score}</span> out of
        a possible <span className="highlight-text">300</span>.
      </h2>
      <div>
        <img
          src="https://media.giphy.com/media/Wmo5sQSHrX8Ok7T6eo/giphy.gif"
          alt="tandem bike"
        />
      </div>

      <button onClick={() => window.location.reload(false)}>Try Again</button>
    </div>
  );
};

export default GameResults;
