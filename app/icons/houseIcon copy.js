import React from 'react';
import House from './house.svg';

const HouseIcon = ({ size = 22, color = '#f1f1f1f' }) => {
  return (
    <img
      src={House}
      alt="House"
      height={size}
      width={size}
      style={{ fill: color }}
    />
  );
};

export default HouseIcon;
