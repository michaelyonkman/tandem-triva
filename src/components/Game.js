import React from 'react';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

const Game = (props) => {
  const renderAnswerOptions = (answer) => {
    return (
      <AnswerOption
        key={answer}
        answerContent={answer}
        answerType={answer}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  };

  console.log(props);
  return (
    <div className="game">
      <h1>Game</h1>
      <QuestionCount counter={props.questionId} />
      <Question question={props.question} />
      <ul className="answer-options">
        {props.answerOptions.map((answer) => renderAnswerOptions(answer.text))}
      </ul>
    </div>
  );
};

export default Game;
