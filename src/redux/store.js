import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './feedback-reducer.js';

const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});

export default store;
