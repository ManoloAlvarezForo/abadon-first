import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import CustomProductListItem from './CustomProductListItem';

/**
 * Product list component.
 *
 * @param {[Object]} products Object list that represent Products.
 */
const ProductList = ({ products, remove }) => {
  return (
    <div style={productListStyles.mainContainer}>
      <div
        style={{
          overflow: 'auto',
          height: 'calc(100vh - 178px)',
          paddingRight: '5px',
          paddingLeft: '2px'
        }}
      >
        {products.length > 0 ? (
          products.map(product => {
            return (
              <CustomProductListItem
                product={product}
                key={product.id}
                remove={remove}
              />
            );
          })
        ) : (
          <Typography
            variant="h6"
            style={{
              color: 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '50px'
            }}
          >
            Ningun producto agregado a la lista.
          </Typography>
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  remove: PropTypes.func.isRequired
};

const productListStyles = {
  mainContainer: {
    display: 'flex',
    height: '95%',
    flexDirection: 'column'
  }
};

export default ProductList;
