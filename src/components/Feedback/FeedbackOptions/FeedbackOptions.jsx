import css from './feedbackOptions.module.css';
// import PropTypes from 'prop-types';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <>
      <button type="button" onClick={good} className={css.btn}>
        good
      </button>
      <button type="button" onClick={neutral} className={css.btn}>
        neutral
      </button>
      <button type="button" onClick={bad} className={css.btn}>
        bad
      </button>
    </>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
