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
    answerStatus: null,
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
  const setNextQuestion = () => {
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
        answerStatus: null,
      };
    });
    setTimer(30);
  };

  //onClick function to handle answerSelection
  const handleAnswerSelected = (event) => {
    clearTimeout(stopTimer);
    let questionScore = state.score;
    let answerStatus = null;
    //logic to increment score if answer is correct
    //answerStatus is set here to determine which AnswerResult version will be displayed
    if (event.target.value === state.correctAnswer) {
      questionScore += 1;
      answerStatus = 'correct';
    } else {
      answerStatus = 'incorrect';
    }
    setState((prevState) => {
      return {
        ...prevState,
        score: questionScore,
        answerStatus: answerStatus,
      };
    });
    handleAnswerFeedback();
  };

  //setTimeout to display AnswerResult or GameResults
  const handleAnswerFeedback = () => {
    if (state.questionId < 10) {
      setTimeout(() => setNextQuestion(), 3000);
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

  //initial timer state
  const [timer, setTimer] = useState(30);

  //variable for clearTimeout
  let stopTimer = null;

  //function to start timer
  const startTimer = () => {
    stopTimer = setTimeout(() => setTimer(timer - 1), 1000);
  };

  //starts timer and if time runs out changes answerStatus to render Time Out
  useEffect(() => {
    if (timer > 0) {
      startTimer();
    } else {
      setState((prevState) => {
        return { ...prevState, answerStatus: 'timeOut' };
      });
      handleAnswerFeedback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  if (state.isLoaded) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>tandem trivia</h1>
        </header>
        <Game
          answerOptions={state.answerOptions}
          correctAnswer={state.correctAnswer}
          questionId={state.questionId}
          question={state.question}
          score={state.score}
          answerStatus={state.answerStatus}
          onAnswerSelected={handleAnswerSelected}
          gameOver={state.gameOver}
          timer={timer}
        />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default App;
