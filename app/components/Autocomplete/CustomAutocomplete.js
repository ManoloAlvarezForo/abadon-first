/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '../../icons/searchIcon';

const useStyles = makeStyles(() => ({
  input: {
    height: 40
  },
  selectRoot: {
    height: 45,
    display: 'table'
  },
  select: {
    height: 45,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'table-cell',
    verticalAlign: 'middle'
  }
}));

const CustomAutocomplete = ({
  label = '',
  placeholder = '',
  addSelectedItemEvent,
  options,
  onChangeEvent,
  renderOption,
  inputType,
  startAdornment = true,
  isShrink = true
}) => {
  const [selectedTextField] = useState('');
  const classes = useStyles();

  const onChangeHandle = event => {
    onChangeEvent(event.target.value);
  };

  const selectItemHandle = item => {
    addSelectedItemEvent(item);
  };

  return (
    <div style={{ width: '100%' }}>
      <Autocomplete
        freeSolo
        getOptionLabel={() => ''}
        id="custom-autocomplete-123"
        disableOpenOnFocus
        disableClearable
        options={options}
        renderOption={renderOption(selectItemHandle)}
        renderInput={params => (
          <TextField
            onChange={onChangeHandle}
            value={selectedTextField}
            {...params}
            label={label}
            placeholder={placeholder}
            variant={inputType}
            margin="dense"
            fullWidth
            InputProps={{
              ...params.InputProps,
              className: classes.input,
              type: 'search',
              startAdornment: startAdornment && (
                <InputAdornment position="start">
                  <SearchIcon size={16} />
                </InputAdornment>
              )
            }}
            InputLabelProps={{
              shrink: isShrink
            }}
          />
        )}
      />
    </div>
  );
};

CustomAutocomplete.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  addSelectedItemEvent: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  onChangeEvent: PropTypes.func,
  renderOption: PropTypes.instanceOf(Object),
  inputType: PropTypes.string,
  startAdornment: PropTypes.bool,
  isShrink: PropTypes.bool
};

CustomAutocomplete.defaultProps = {
  label: '',
  placeholder: '',
  addSelectedItemEvent: () => {},
  options: [],
  onChangeEvent: () => {},
  renderOption: {},
  inputType: '',
  startAdornment: true,
  isShrink: true
};

export default CustomAutocomplete;
