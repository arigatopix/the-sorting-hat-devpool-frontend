import React, { useState } from 'react';

// รับ ชื่อจาก Form
// แสดงผล ชื่อ

// แสดงผลบ้านที่ได้
// สามารถปิดได้

const Popup = ({ magicianName, houseName }) => {
  return (
    <div>
      <p>
        Ah! {magicianName} I know just what to do with you... House{houseName}{' '}
        !!!!
      </p>
    </div>
  );
};

export default Popup;
