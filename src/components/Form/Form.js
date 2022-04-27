import React, { useState, useContext, useEffect } from 'react';
import FormContaxt from '../../contaxt/form/formContaxt';
import Popup from '../Popup/Popup';

// รับชื่อ ส่งไปแสดงผล
// ประมวลผลว่าได้บ้านไหน แล้วส่งไป  stat
const Form = () => {
  // STATE
  const [showPopup, setShowPopup] = useState(false);

  const houseName = 'ABC';

  const formContaxt = useContext(FormContaxt);

  // load init state
  const { addName } = formContaxt;

  const [name, setName] = useState('');

  // USE EFFECT
  useEffect(() => {
    if (name === '') {
      setShowPopup(false);
    }
  }, [showPopup, name]);

  const clearAll = () => {
    setName('');

    setShowPopup(false);
  };

  const onSubmit = e => {
    if (name !== '') {
      // TODO send data to STAT AND POPUP
      addName(name);

      // Show popup
      setShowPopup(true);
    }

    e.preventDefault();
  };

  const onChange = e => {
    setName(e.target.value);
  };

  return (
    <>
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

      {showPopup && <Popup magicianName={name} houseName={houseName} />}
    </>
  );
};

export default Form;
