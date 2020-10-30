import React, { useState, useEffect } from 'react';
import questions from '../src/data/questions.json';
import Game from './components/Game';

const App = () => {
  //initial state for App
  const [state, setState] = useState({
    gameQuestions: [],
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    correctAnswer: '',
    answer: '',
    isAnswered: null,
    score: 0,
    isLoaded: false,
    gameOver: false,
  });

  //loading questions from json file
  useEffect(() => {
    const loadQuestions = () => {
      const loadedQuestions = shuffleQuestions();
      setState((prevState) => {
        return {
          ...prevState,
          gameQuestions: loadedQuestions,
          question: loadedQuestions[0].question,
          answerOptions: loadedQuestions[0].answerOptions,
          correctAnswer: loadedQuestions[0].correct,
          gameOver: false,
          isLoaded: true,
        };
      });
    };

    //grabbing and shuffling 10 unique questions from data file
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

    //combining incorrect and correct answers into one array and sorting them alpahbetically so correct answers aren't always in the same position
    const shuffleAnswers = (question) => {
      let shuffledAnswers = [...question.incorrect, question.correct].sort();
      question.answerOptions = shuffledAnswers;
      return question;
    };

    loadQuestions();
  }, []);

  //function to grab and set next question after user has answered previous one
  const setNextQuestion = (answer) => {
    const nextCount = state.counter + 1;
    const nextQuestionId = state.questionId + 1;

    setState((prevState) => {
      return {
        ...prevState,
        counter: nextCount,
        questionId: nextQuestionId,
        question: state.gameQuestions[nextCount].question,
        answerOptions: state.gameQuestions[nextCount].answerOptions,
        correctAnswer: state.gameQuestions[nextCount].correct,
        answer: '',
        isAnswered: null,
      };
    });
  };

  //onClick function to handle answerSelection
  const handleAnswerSelected = (event) => {
    let questionScore = state.score;
    let isAnswered = null;
    //logic to increment score if answer is correct
    //isAnswered is set here to determine which AnswerResult version will be displayed
    if (event.target.value === state.correctAnswer) {
      questionScore += 1;
      isAnswered = 'correct';
    } else {
      isAnswered = 'incorrect';
    }
    setState((prevState) => {
      return {
        ...prevState,
        answer: event.target.value,
        score: questionScore,
        isAnswered: isAnswered,
      };
    });
    //setTimeout to display AnswerResult or GameResults
    if (state.questionId < 10) {
      setTimeout(() => setNextQuestion(event.target.value), 3000);
    } else {
      setTimeout(
        () =>
          setState((prevState) => {
            return { ...prevState, gameOver: true };
          }),
        3000
      );
    }
  };

  if (state.isLoaded) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>tandem trivia</h1>
        </header>
        <Game
          answer={state.answer}
          answerOptions={state.answerOptions}
          correctAnswer={state.correctAnswer}
          questionId={state.questionId}
          question={state.question}
          score={state.score}
          isAnswered={state.isAnswered}
          onAnswerSelected={handleAnswerSelected}
          gameOver={state.gameOver}
        />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default App;
