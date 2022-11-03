import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onClickBtn = ({
    target: {
      dataset: { type },
    },
  }) => {
    this.setState({ [type]: this.state[type] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total !== 0 ? Math.round((100 / total) * good) : 0;
  };
  render() {
    const { onClickBtn, countTotalFeedback, countPositiveFeedbackPercentage } =
      this;
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback();
    return (
      <div
        style={{
          width: 'min-content',
          margin: '0 auto',
        }}
      >
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={onClickBtn}
            ></FeedbackOptions>
          </Section>

          <Section title="Statistics">
            {total === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={countPositiveFeedbackPercentage()}
              ></Statistics>
            )}
          </Section>
        </div>
      </div>
    );
  }
}
export { App };
