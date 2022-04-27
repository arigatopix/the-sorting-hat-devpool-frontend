import React, { useReducer } from 'react';
import FormContaxt from './formContaxt';
import FormReducer from './formReducer';
import { ADD_NAME, CLEAR_CURRENT } from '../types';

const FormState = props => {
  const initialState = {
    name: null,
    current: null,
  };

  // * Send state to Reducer
  const [state, dispatch] = useReducer(FormReducer, initialState);

  // * Actions
  const clearForm = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  const addName = name => {
    // หลังจากได้ชื้อมา ก็ต้อง return บ้าน

    dispatch({
      type: ADD_NAME,
      payload: name,
    });
  };

  return (
    <FormContaxt.Provider
      value={{
        name: state.name,
        current: state.current,
        clearForm,
        addName,
      }}
    >
      {props.children}
    </FormContaxt.Provider>
  );
};

export default FormState;
