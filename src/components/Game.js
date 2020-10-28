import React, { useState, useEffect } from 'react';
import questions from '../data/questions.json';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

const Game = (props) => {
  const [score, setScore] = useState(0);
  const [gameQuestions, setGameQuestions] = useState([]);
  const [questionId, setQuestionId] = useState(0);

  const renderAnswerOptions = (answer) => {
    return (
      <AnswerOption
        key={answer}
        answerContent={answer}
        answerType={answer}
        // answer={props.answer}
        // questionId={props.questionId}
        // onAnswerSelected={props.onAnswerSelected}
      />
    );
  };

  function incrementScore() {
    setScore((prevScore) => prevScore + 1);
  }

  if (props.gameQuestions.length) {
    return (
      <div className="game">
        <h1>Game</h1>
        <QuestionCount counter="1" />
        <Question question={props.gameQuestions[0].question} />
        <ul className="answer-options">
          {props.gameQuestions[questionId].answers.map((answer) =>
            renderAnswerOptions(answer.text)
          )}
        </ul>
        <h1>Score: {score}</h1>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Game;
