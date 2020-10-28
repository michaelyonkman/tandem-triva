import React, { useState, useEffect } from 'react';
import './App.css';
import questions from '../src/data/questions.json';
import Game from './components/Game';

const App = () => {
  const [gameQuestions, setGameQuestions] = useState([]);
  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadQuestions = () => {
      const gameQuestions = shuffleQuestions();
      setGameQuestions(gameQuestions);
      setQuestion(gameQuestions[0].question);
      setAnswerOptions(gameQuestions[0].answers);
      setIsLoaded(true);
    };

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

    loadQuestions();
  }, []);

  const setNextQuestion = () => {
    const nextCount = counter + 1;
    const nextQuestionId = questionId + 1;
    setCounter(nextCount);
    setQuestionId(nextQuestionId);
    setQuestion(gameQuestions[nextCount].question);
    setAnswerOptions(gameQuestions[nextCount].answers);
    setAnswer('');
  };

  const handleAnswerSelected = (event) => {
    setAnswer(event.target.value);
    if (questionId < 10) {
      setTimeout(() => setNextQuestion(), 300);
    }
  };

  if (isLoaded) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tandem Trivia</h1>
        </header>
        <Game
          answer={answer}
          answerOptions={answerOptions}
          questionId={questionId}
          question={question}
          onAnswerSelected={handleAnswerSelected}
        />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default App;
