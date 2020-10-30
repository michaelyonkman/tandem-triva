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
        isAnswered={props.isAnswered}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  };
  if (!props.gameOver) {
    return (
      <div className="game">
        <Score score={props.score} />
        <QuestionCount counter={props.questionId} />
        <Question question={props.question} />
        <AnswerResults
          correctAnswer={props.correctAnswer}
          isAnswered={props.isAnswered}
        />
        <div className="answer-options">
          {props.answerOptions.map((answerOption) =>
            renderAnswerOptions(answerOption)
          )}
        </div>
      </div>
    );
  } else {
    return <GameResults score={props.score} />;
  }
};

export default Game;
