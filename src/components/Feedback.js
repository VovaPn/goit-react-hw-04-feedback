import React from 'react';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import { useState } from 'react';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return ((100 * good) / totalFeedback).toFixed();
  };
  function onClickBtn(evt) {
    switch (evt.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  }
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onClickBtn}
        />
      </Section>

      <h2>Statistics</h2>

      {totalFeedback === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={totalFeedback}
          positive={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
};

export default Feedback;
