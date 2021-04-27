import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './FeedbackOptions.module.css';
import actions from '../../../redux/feedback-actions';

const FeedbackOptions = ({ options }) => {
  const dispatch = useDispatch();

  function clickBtn(e) {
    const { name } = e.target;

    switch (name) {
      case 'good':
        dispatch(actions.countGoodFeedback());
        break;

      case 'neutral':
        dispatch(actions.countNeuteralFeedback());
        break;

      case 'bad':
        dispatch(actions.countBadFeedback());
        break;

      default:
        return;
    }
  }

  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            onClick={clickBtn}
            className={styles.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
