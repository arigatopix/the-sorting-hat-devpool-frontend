import { ADD_NAME, CLEAR_CURRENT } from '../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        name: null,
      };
    default:
      return state;
  }
};
