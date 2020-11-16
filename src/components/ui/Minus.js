import React from 'react';
const Minus = ({ size = 20, color = '#000000' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='arcs'
    style={{ top: '13px', position: 'absolute', left: '9%' }}
  >
    <line x1='5' y1='12' x2='19' y2='12'></line>
  </svg>
);
export default Minus;
