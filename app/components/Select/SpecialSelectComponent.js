import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  TextField,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  Avatar,
  ListItemText
} from '@material-ui/core';
import { FiImage } from 'react-icons/fi';

const ProductMenuItem = ({ product, selectedItemEvent }) => {
  const onClickItem = newProduct => {
    selectedItemEvent(newProduct);
  };

  return (
    <MenuItem onClick={() => onClickItem(product)}>
      <Avatar>
        <FiImage />
      </Avatar>
      <ListItemText
        primary={`${product.productName} - Precio: ${product.price} Bs.`}
        secondary={`Code: ${product.productId} / ${product.description}`}
      />
    </MenuItem>
  );
};

ProductMenuItem.propTypes = {
  product: PropTypes.instanceOf(Object),
  selectedItemEvent: PropTypes.func
};

ProductMenuItem.defaultProps = {
  product: {},
  selectedItemEvent: () => {}
};

const useStyles = makeStyles(() => ({
  input: {
    height: 45
  },
  selectRoot: {
    height: 40,
    display: 'table'
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  select: {
    height: 35,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'table-cell',
    verticalAlign: 'middle'
  }
}));

const SpecialSelectComponent = ({
  label,
  placeholder,
  addItems,
  suggestions: Suggestions
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedTextField, setSelectedTextField] = useState('');
  const anchorEl = React.useRef(null);

  const onChangeHandle = event => {
    setOpen(true);
    setSelectedTextField(event.target.value);
  };

  const handleClose = () => {
    setSelectedTextField('');
    setOpen(false);
  };

  const clickItemHandle = item => {
    addItems(item);
    setOpen(false);
    setSelectedTextField('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <TextField
        onChange={onChangeHandle}
        value={selectedTextField}
        label={label}
        placeholder={placeholder}
        fullWidth
        margin="normal"
        variant="outlined"
        InputProps={{
          className: classes.input
        }}
        InputLabelProps={{
          shrink: true
        }}
      />

      <Popper
        style={styles.menu}
        open={open}
        anchorEl={anchorEl.current}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <Suggestions
                    query={selectedTextField}
                    item={ProductMenuItem}
                    selectedItemEvent={clickItemHandle}
                  />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

const styles = {
  menu: {
    position: 'absolute',
    zIndex: 3,
    top: '55px',
    overflow: 'auto',
    width: '100%',
    height: '350px'
  }
};

SpecialSelectComponent.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  addItems: PropTypes.func,
  suggestions: PropTypes.instanceOf(Array)
};

SpecialSelectComponent.defaultProps = {
  label: '',
  placeholder: '',
  addItems: () => {},
  suggestions: []
};

export default SpecialSelectComponent;
