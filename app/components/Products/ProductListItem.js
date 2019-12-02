import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, ListItemText } from '@material-ui/core';
import { FiImage } from 'react-icons/fi';

const ProductListItem = ({ product, selectedItemEvent }) => {
  const { productName, price, productId, description } = product;

  const onClickItem = newProduct => {
    selectedItemEvent(newProduct);
  };

  return (
    <div
      onKeyPress={() => {}}
      role="product"
      key={productId}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
      onClick={() => onClickItem(product)}
    >
      <Avatar style={{ marginRight: '10px' }}>
        <FiImage />
      </Avatar>
      <ListItemText
        primary={`${productName} - Precio: ${price} Bs.`}
        secondary={`Code: ${productId} / ${description}`}
      />
    </div>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.instanceOf(Object),
  selectedItemEvent: PropTypes.func
};

ProductListItem.defaultProps = {
  product: {},
  selectedItemEvent: () => {}
};

export default ProductListItem;
