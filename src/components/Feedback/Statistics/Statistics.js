import React from 'react';
import Notification from '../Notification/Notification';
import { useSelector } from 'react-redux';
import selectors from '../../../redux/feedback-selectors';
import PropTypes from 'prop-types';

const Statistics = () => {
  const good = useSelector(selectors.getGoodFedback);
  const neutral = useSelector(selectors.getNeutralFedback);
  const bad = useSelector(selectors.getBadFedback);

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good * 100) / total);

  return (
    <div>
      <h1>Statistics</h1>

      {total > 0 ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

Statistics.defaultProps = {
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
