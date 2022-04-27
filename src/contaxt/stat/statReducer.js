import { GET_STAT, CLEAR_STAT, ADD_STAT } from '../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    // ดึงจาก localStorage
    case GET_STAT:
      return {
        ...state,
        houses: action.payload,
      };
    // TODO มาทำเพิ่ม ต้องเอา poplate ไปเพิ่ม
    // case ADD_STAT:
    //   return {
    //     ...state,
    //     house: action.payload,
    //   };
    case CLEAR_STAT:
      // remove token from localStorage
      localStorage.removeItem('houses');
      return {
        ...state,
        houses: null,
      };
    default:
      return state;
  }
};
