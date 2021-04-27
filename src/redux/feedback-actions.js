/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const countGoodFeedback = createAction('feedback/countGoodFeedback');
const countNeuteralFeedback = createAction('feedback/countNeuteralFeedback');
const countBadFeedback = createAction('feedback/countBadFeedback');

export default {
  countGoodFeedback,
  countNeuteralFeedback,
  countBadFeedback,
};
