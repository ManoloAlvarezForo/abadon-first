import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker } from 'material-ui-pickers';
import CustomAutocomplete from '../Autocomplete/CustomAutocomplete';

const SearchProducts = ({
  options,
  onChangeEvent,
  renderOption,
  addProductEvent
}) => {
  /**
   * Current date for the sale.
   */
  const [date, setDate] = useState(moment());

  // /**
  //  * Autocomplete handle changes events.
  //  *
  //  * @param {Object} evt Object event.
  //  */
  // const onChangeHandle = evt => {
  //   onChangeEvent(evt.target.value);
  // };

  return (
    <div style={searchProductsStyles.mainContainer}>
      <CustomAutocomplete
        placeholder="Buscar por codigo nombre o descripcion"
        label="Producto"
        options={options}
        onChangeEvent={onChangeEvent}
        addSelectedItemEvent={addProductEvent}
        renderOption={renderOption}
        inputType="outlined"
      />
      <div style={{ marginLeft: '5px' }}>
        <DatePicker
          inputVariant="outlined"
          label="Fecha"
          value={date}
          onChange={value => setDate(value)}
          format="DD MMM YYYY"
          margin="dense"
        />
      </div>
    </div>
  );
};

SearchProducts.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  renderOption: PropTypes.instanceOf(Object).isRequired,
  addProductEvent: PropTypes.func.isRequired
};

const searchProductsStyles = {
  mainContainer: {
    backgroundColor: '#f3f3f3',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    // boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    padding: '7px',
    borderRadius: '5px',
    margin: '2px 0 5px 0'
  }
};

export default SearchProducts;
