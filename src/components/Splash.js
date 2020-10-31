import React, { useState } from 'react';
import App from '../App';

const Splash = () => {
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>tandem trivia</h1>
        </header>
        <div className="game-results">
          <h1>Well, hello there!!!</h1>

          <div className="rules-container">
            <p className="rules">
              Welcome to <span className="highlight-text">Tandem Trivia</span>!{' '}
              The rules here are pretty simple... Each round is comprised of{' '}
              <span className="highlight-text">10 questions</span> with a
              maximum value of <span className="highlight-text">30 points</span>{' '}
              each. You've got{' '}
              <span className="highlight-text">30 seconds</span> to answer each
              question before <span className="highlight-text">BOOM!!!</span>,
              time's up. But be quick, because{' '}
              <span className="highlight-text">
                the points you earn are equivalent to the number of seconds
                remaining
              </span>
              . If you answer wrong, you get nada..., zip..., zero..., zilch...,
              well you get the idea. Be a rockstar and try to get all{' '}
              <span className="highlight-text">300 points</span>! When you're
              ready to play, <span className="highlight-text">click</span> that
              button down there right below our cute little tandem bikers.{' '}
            </p>
          </div>

          <div>
            <img
              src="https://media.giphy.com/media/Wmo5sQSHrX8Ok7T6eo/giphy.gif"
              alt="tandem bike"
            />
          </div>
          <button onClick={() => setVisible(false)}>Play</button>
        </div>
      </div>
    );
  } else {
    return <App />;
  }
};

export default Splash;
