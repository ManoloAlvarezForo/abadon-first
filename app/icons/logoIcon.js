import React from 'react';
import PropTypes from 'prop-types';
import Logo from './logo.svg';

const LogoIcon = ({ size = 22 }) => {
  return <img src={Logo} alt="Logo" height={size} width={size} />;
};

LogoIcon.propTypes = {
  size: PropTypes.number
};

LogoIcon.defaultProps = {
  size: 22
};

export default LogoIcon;
