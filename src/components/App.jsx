import React from 'react';

import Statistics from './Statistics/statistics';
import FeedbackOptions from './Feedbackoption/feedbackoption';
import Section from './Section/Section';
import Notification from './Notification/notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.floor((this.state.good / total) * 100);
  }

  handleLeaveFeedback = option => {
    this.setState(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message="There is no feedback :(" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}

export { App };
