import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './feedback-actions';

const goodFeedback = createReducer(0, {
  [actions.countGoodFeedback]: (store, { payload }) => store + 1,
});

const neuteralFeedback = createReducer(0, {
  [actions.countNeuteralFeedback]: (store, { payload }) => store + 1,
});

const badFeedback = createReducer(0, {
  [actions.countBadFeedback]: (store, { payload }) => store + 1,
});

export default combineReducers({ goodFeedback, neuteralFeedback, badFeedback });
