import React, { useState, useContext } from 'react';
import FormContaxt from '../../contaxt/form/formContaxt';

const Form = () => {
  const formContaxt = useContext(FormContaxt);

  // load init state
  const { addName } = formContaxt;

  const [name, setName] = useState('');

  const clearAll = () => {
    setName('');
  };

  const onSubmit = e => {
    // TODO send data to STAT AND POPUP
    // * action creator
    addName(name);

    // Clear Form
    clearAll();

    e.preventDefault();
  };

  const onChange = e => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Name</h2>
      <input type="text" name="name" onChange={onChange} value={name} />

      <div>
        <input type="submit" value={'Submit'} />
      </div>
      <div>
        <button onClick={clearAll}>Clear</button>
      </div>
    </form>
  );
};

export default Form;
