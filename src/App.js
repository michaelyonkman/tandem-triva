import React, { useState, useEffect } from 'react';
import './App.css';
import questions from '../src/data/questions.json';
import Game from './components/Game';

const App = () => {
  const [gameQuestions, setGameQuestions] = useState([]);

  useEffect(() => {
    setGameQuestions(shuffleQuestions());
  }, []);

  const shuffleQuestions = () => {
    let questionsCopy = [...questions];
    let shuffledQuestions = [];
    for (let i = 0; i < 10; i++) {
      let shuffleIndex = Math.floor(Math.random() * questionsCopy.length);
      let currentQuestion = questionsCopy[shuffleIndex];
      currentQuestion = shuffleAnswers(currentQuestion);
      shuffledQuestions.push(currentQuestion);
      questionsCopy.splice(shuffleIndex, 1);
    }
    return shuffledQuestions;
  };

  const shuffleAnswers = (question) => {
    let answers = question.incorrect.map((answer) => ({
      text: answer,
      correct: false,
    }));
    answers.push({ text: question.correct, correct: true });
    answers.sort((a, b) => (a.text < b.text ? -1 : 1));
    question.answers = answers;
    return question;
  };

  return (
    <div className="App">
      {console.log('IN APP')}
      <header className="App-header">
        <h1>Tandem Trivia</h1>
      </header>
      <Game gameQuestions={gameQuestions} />
    </div>
  );
};

export default App;
