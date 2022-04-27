import React, { useContext } from 'react';

import StatContaxt from '../../contaxt/stat/statContaxt';

const Stat = () => {
  const statContaxt = useContext(StatContaxt);

  const { houses } = statContaxt;

  return (
    <div>
      <h1>Stat</h1>
      <p>comming soon ...</p>
    </div>
  );
};

export default Stat;
