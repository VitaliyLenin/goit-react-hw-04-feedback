import { useState } from 'react';

import Statistics from './Statistics/statistics';
import FeedbackOptions from './Feedbackoption/feedbackoption';
import Section from './Section/Section';
import Notification from './Notification/notification';

export default function App() {
  const [feedBack, setFeeback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = option => {
    setFeeback(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedBack;

    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedBack;
    if (good === 0) {
      return 0;
    }
    return Math.floor((good * 100) / countTotalFeedback());
  };

  const options = Object.keys(feedBack);
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      {total === 0 ? (
        <Notification message="There is no feedback :(" />
      ) : (
        <Section title="Statistics">
          <Statistics
            options={feedBack}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
}
