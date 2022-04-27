import React, { useReducer } from 'react';
import StatContaxt from './statContaxt';
import StatReducer from './statReducer';
import { GET_STAT, CLEAR_STAT, ADD_STAT } from '../types';

const StatState = props => {
  const initialState = {
    houses: localStorage.getItem('houses'),
  };

  const [state, dispatch] = useReducer(StatReducer, initialState);

  const getStat = () => {
    if (!localStorage.houses) {
      const houses = [
        {
          name: 'Gryffindor',
          population: 12,
        },
        {
          name: 'Hufflepuff',
          population: 1,
        },
        {
          name: 'Ravenclaw',
          population: 8,
        },
        {
          name: 'Slytherin',
          population: 4,
        },
      ];

      localStorage.setItem('houses', houses);
    }

    const houses = localStorage.getItem('houses');

    // get stat from localStorage
    dispatch({
      type: GET_STAT,
      payload: houses,
    });
  };

  const clearStat = () => {
    // remove stat from localStorage
    dispatch({
      type: CLEAR_STAT,
    });
  };

  const addStat = house => {
    // added house to localStorage
    dispatch({
      type: ADD_STAT,
      payload: house,
    });
  };

  return (
    <StatContaxt.Provider
      value={{
        houses: state.houses,
        getStat,
        clearStat,
        addStat,
      }}
    >
      {props.children}
    </StatContaxt.Provider>
  );
};

export default StatState;
