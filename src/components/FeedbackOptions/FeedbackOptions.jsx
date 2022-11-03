import PT from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.controls}>
      {options.map(type => (
        <button
          className={s.btn}
          key={type}
          onClick={onLeaveFeedback}
          data-type={type}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PT.arrayOf(PT.string).isRequired,
  onLeaveFeedback: PT.func.isRequired,
};
