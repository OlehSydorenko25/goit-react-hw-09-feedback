/* eslint-disable import/no-anonymous-default-export */
const getGoodFedback = state => state.feedback.goodFeedback;
const getNeutralFedback = state => state.feedback.neuteralFeedback;
const getBadFedback = state => state.feedback.badFeedback;

export default {
  getGoodFedback,
  getNeutralFedback,
  getBadFedback,
};
