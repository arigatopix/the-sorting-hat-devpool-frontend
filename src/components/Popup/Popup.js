import React from 'react';

const Popup = ({ magicianName, housename }) => {
  return (
    <div>
      <p>
        Ah! <b>{magicianName}</b> I know just what to do with you... House{' '}
        <b>{housename} 🪄!!!!</b>
      </p>
    </div>
  );
};

export default Popup;
