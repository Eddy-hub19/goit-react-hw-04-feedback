import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Notification } from './Feedback/Notification/Notification';
import { SectionTitle } from './Feedback/SectionTitle/SectionTitle';
import { Statistics } from './Feedback/Statistics/Statistics';
import css from './App.module.css';

export default function AppHooks() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodSet = () => {
    setGood(prevState => prevState + 1);
    console.log(good);
  };
  const neutralSet = () => {
    setNeutral(prevState => prevState + 1);
    console.log(neutral);
  };
  const badSet = () => {
    setBad(prevState => prevState + 1);
    console.log(bad);
  };

  const countTotal = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let positive = 0;
    if (good !== 0) {
      positive = Math.round((good / countTotal()) * 100);
    }
    return positive;
  };

  return (
    <div className={css.container}>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions good={goodSet} neutral={neutralSet} bad={badSet} />
      </SectionTitle>

      <SectionTitle title="Statistics">
        {countTotal() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectionTitle>
    </div>
  );
}
