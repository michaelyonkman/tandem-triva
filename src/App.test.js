import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, screen } from '@testing-library/react';
import App from './App';
import Game from '../src/components/Game';
import AnswerOption from '../src/components/AnswerOption';

const dummyData = {
  answer: '',
  answerOptions: ['d', 'a', 'c', 'b'],
  correctAnswer: 'c',
  questionId: 1,
  question: 'What is the letter after b?',
  gameOver: false,
  answerStatus: null,
  score: 0,
};

it('renders without crashing', () => {
  shallow(<App />);
});

test('renders tandem trivia header', () => {
  render(<App />);
  const header = screen.getByText('tandem trivia');
  expect(header).toBeInTheDocument();
});

it('renders Loading... message with no data', () => {
  const wrapper = shallow(<App />);
  const loading = <div>Loading...</div>;
  expect(wrapper.contains(loading)).toEqual(true);
});

describe('Game Component', () => {
  it('accepts props from App component', () => {
    const wrapper = mount(
      <Game
        answer={dummyData.answer}
        answerOptions={dummyData.answerOptions}
        correctAnswer={dummyData.correctAnswer}
        questionId={dummyData.questionId}
        question={dummyData.question}
        score={dummyData.score}
        answerStatus={dummyData.answerStatus}
        gameOver={dummyData.gameOver}
      />
    );
    expect(wrapper.props()).toEqual(dummyData);
  });
  it('correctly renders initial score', () => {
    const wrapper = mount(
      <Game score={dummyData.score} answerOptions={dummyData.answerOptions} />
    );
    const value = wrapper.find('Score').text();
    expect(value).toEqual('Score 0');
  });
  it('renders correct number of answer options', () => {
    const wrapper = mount(<Game answerOptions={dummyData.answerOptions} />);
    expect(wrapper.find(AnswerOption).length).toEqual(
      dummyData.answerOptions.length
    );
  });
  it('answerOptions should be alphabetically sorted', () => {
    const wrapper = mount(<App />);
    const game = wrapper.find(Game);
    const answers = game.props().answerOptions;
    const sortedAnswers = answers.sort();
    expect(answers).toEqual(sortedAnswers);
  });
});
