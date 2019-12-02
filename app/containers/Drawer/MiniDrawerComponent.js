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
import DrawerList from './DrawerList';
import { APP_NAME_SHORT, APP_NAME_SMALL } from '../../constants/constants';

const DRAWER_WIDTH = 240;

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
    marginLeft: 12,
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
    left: 'unset'
  },
  paper: {
    position: 'relative',
    top: 'unset'
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
  const [open, setOpen] = useState(false);

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
        paper: clsx({
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
                      fontFamily: 'Pacifico',
                      fontSize: '1.8rem',
                      fontWeight: 'normal'
                    }}
                    component="h4"
                    variant="h4"
                  >
                    {open ? APP_NAME_SMALL : APP_NAME_SHORT}
                  </Typography>
                  <Typography
                    style={{
                      color: '#e91e63',
                      fontSize: '2rem',
                      fontWeight: 'normal',
                      marginLeft: '15px',
                      marginBottom: 0,
                      marginTop: '10px'
                    }}
                    variant="h4"
                  >
                    <IoIosCube />
                  </Typography>
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
                    <Typography
                      style={{
                        color: '#e91e63',
                        fontSize: '2.5rem',
                        marginTop: '10px'
                      }}
                      variant="h4"
                    >
                      <IoIosCube />
                    </Typography>
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
