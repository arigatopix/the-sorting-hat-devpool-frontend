import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');

  const clearAll = () => {
    setName('');
  };

  const onSubmit = e => {
    // TODO send data to STAT AND POPUP
    // console.log(e.target.name);

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
