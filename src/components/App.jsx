import {  useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const initType = { good: 0, neutral: 0, bad: 0 };
function App() {
  // state = { good: 0, neutral: 0, bad: 0 };
  const [type, setType] = useState(initType);

  const onClickBtn = ({
    target: {
      dataset: { type },
    },
  }) => {
    setType(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = type;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = type;
    const total = good + neutral + bad;
    return total !== 0 ? Math.round((100 / total) * good) : 0;
  };

  const { good, neutral, bad } = type;
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
            options={Object.keys(type)}
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
export { App };
