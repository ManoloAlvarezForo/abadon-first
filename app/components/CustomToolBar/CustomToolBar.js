import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';

const CustomToolBar = ({ additionalComponent, title }) => {
  return (
    <AppBar position="static" style={{ background: '#414755' }}>
      <Toolbar
        style={{
          width: '100%'
        }}
      >
        <Typography
          variant="h6"
          style={{ width: '10%', fontWeight: 600, color: '#d4d3d1' }}
          noWrap
        >
          {title}
        </Typography>
        {additionalComponent}
      </Toolbar>
    </AppBar>
  );
};

CustomToolBar.propTypes = {
  additionalComponent: PropTypes.instanceOf(Object),
  title: PropTypes.string.isRequired
};

CustomToolBar.defaultProps = {
  additionalComponent: undefined
};

export default CustomToolBar;
