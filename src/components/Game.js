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
        <QuestionCount counter={props.questionId} />
        <Score score={props.score} />

        <Question question={props.question} />
        <div className="answer-options">
          {props.answerOptions.map((answerOption) =>
            renderAnswerOptions(answerOption)
          )}
        </div>
        <AnswerResults
          correctAnswer={props.correctAnswer}
          isAnswered={props.isAnswered}
        />
      </div>
    );
  } else {
    return <GameResults score={props.score} />;
  }
};

export default Game;
