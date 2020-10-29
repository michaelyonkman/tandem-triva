import React from 'react';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import Score from './Score';
import AnswerResults from './AnswerResults';
import GameResults from './GameResults';

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
  if (!props.gameOver) {
    return (
      <div className="game">
        <h1>Game</h1>
        <QuestionCount counter={props.questionId} />
        <Question question={props.question} />
        <ul className="answer-options">
          {props.answerOptions.map((answerOption) =>
            renderAnswerOptions(answerOption)
          )}
        </ul>
        <AnswerResults
          correctAnswer={props.correctAnswer}
          answeredCorrectly={props.answeredCorrectly}
        />
        <Score score={props.score} />
      </div>
    );
  } else {
    return <GameResults score={props.score} />;
  }
};

export default Game;
