import PT from 'prop-types';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage} %</li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PT.number.isRequired,
  neutral: PT.number.isRequired,
  bad: PT.number.isRequired,
  total: PT.number.isRequired,
  positivePercentage: PT.number.isRequired,
};
