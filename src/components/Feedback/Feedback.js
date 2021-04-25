import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Container/Section';
import Statistics from './Statistics/Statistics';
import '../../index.module.css';

const arrButton = ['good', 'neutral', 'bad'];

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = evt => {
    const { name } = evt.target;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return null;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={arrButton} onLeaveFeedback={handleChange} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </Section>
  );
}
