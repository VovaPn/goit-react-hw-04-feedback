import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsList = Object.keys(options);
  return optionsList.map(option => (
    <button
      className={styles.btn}
      type="button"
      key={option}
      name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
