import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { FiChevronLeft } from 'react-icons/fi';
import { IoIosCube } from 'react-icons/io';
import LogoIcon from '../../icons/logoIcon';
import DrawerList from './DrawerList';
import { APP_NAME_SHORT, APP_NAME_SMALL } from '../../constants/constants';

const DRAWER_WIDTH = 220;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing() * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing() * 7 + 1
    }
  },
  paperAnchorLeft: {
    left: 0
  },
  paper: {
    position: 'relative'
    // backgroundColor: '#414755'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: '0 8px',
    ...theme.mixins.toolbar
  }
}));

const MiniDrawer = ({ changeTitle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx(classes.paper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      open={open}
    >
      <div
        className={classes.toolbar}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <AppBar style={{ backgroundColor: 'inherit' }} position="static">
          <Toolbar style={{ padding: '0', backgroundColor: 'rgb(65, 71, 85)' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              {open ? (
                <div
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: 'Gruppo',
                      color: '#d4d3d1',
                      fontSize: '1.8rem',
                      fontWeight: 'bold'
                    }}
                    component="h4"
                    variant="h4"
                  >
                    {open ? APP_NAME_SMALL : APP_NAME_SHORT}
                  </Typography>
                  <div style={{ marginLeft: '3px' }}>
                    <LogoIcon size={28} />
                  </div>
                </div>
              ) : (
                <div
                  role="presentation"
                  style={{ cursor: 'pointer' }}
                  onClick={handleDrawer}
                >
                  <div
                    style={{
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'row'
                    }}
                  >
                    <LogoIcon size={28} />
                  </div>
                </div>
              )}
              {open && (
                <IconButton
                  style={{ marginLeft: 'auto' }}
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawer}
                  className={clsx({
                    [classes.hide]: !open
                  })}
                >
                  <FiChevronLeft color="gray" />
                </IconButton>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Divider />
      <DrawerList changeTitle={changeTitle} />
    </Drawer>
  );
};

MiniDrawer.propTypes = {
  changeTitle: PropTypes.func
};

MiniDrawer.defaultProps = {
  changeTitle: () => {}
};

export default MiniDrawer;
