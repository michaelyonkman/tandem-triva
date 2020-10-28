import React, { useState, useEffect } from 'react';
import questions from '../data/questions.json';
import Question from './Question';

const Game = () => {
  const [score, setScore] = useState(0);
  const [gameQuestions, setGameQuestions] = useState([]);
  const [currQuestion, setCurrQuestion] = useState(0);

  useEffect(() => {
    setGameQuestions(fetchQuestions());
  }, []);

  const fetchQuestions = () => {
    let questionsCopy = [...questions];
    let randomizedQuestions = [];
    for (let i = 0; i < 10; i++) {
      let qIndex = Math.floor(Math.random() * questionsCopy.length);
      let currQuestion = questionsCopy[qIndex];
      currQuestion.answers = [
        ...currQuestion.incorrect,
        currQuestion.correct,
      ].sort();
      randomizedQuestions.push(currQuestion);
      questionsCopy.splice(qIndex, 1);
    }
    return randomizedQuestions;
  };

  function incrementScore() {
    setScore((prevScore) => prevScore + 1);
  }

  if (gameQuestions.length) {
    return (
      <div className="game">
        {console.log(gameQuestions)}
        <h1>Game</h1>
        <Question question={gameQuestions[currQuestion].question} />
        <h1>Score: {score}</h1>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Game;
