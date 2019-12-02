import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, IconButton, TextField, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GarbageIcon from '../../icons/garbageIcon';
import ShoppingCartIcon from '../../icons/shopping-cart';

const useStyles = makeStyles(() => ({
  input: {
    height: 36
  }
}));

const CustomProductListItem = ({ product, remove }) => {
  const [amount, setAmout] = useState(1);
  const [subTotal, setSubTotal] = useState(product.price);
  const [stock, setStock] = useState(product.availableQuantity - 1);
  const classes = useStyles();

  const amountHandle = newAmount => {
    if (newAmount <= 0) {
      setStock(product.availableQuantity);
      setAmout(1);
    } else {
      setStock(product.availableQuantity - newAmount);
      setSubTotal(newAmount * product.price);
      setAmout(newAmount);
    }
  };

  const removeProduct = productToRemove => {
    remove(productToRemove);
  };

  return (
    <div style={CustomProductListItemStyles.mainContainer}>
      <div style={{ width: 'auto', marginRight: '10px' }}>
        <Avatar
          src="https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
          variant="rounded"
          style={{ height: '60px', width: '60px' }}
        >
          <ShoppingCartIcon size={35} color="gray" />
        </Avatar>
      </div>
      <div
        style={{
          width: '30%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography
          style={{ fontWeight: 'bold', marginBottom: '4px' }}
          variant="body2"
        >
          {product.productName}
        </Typography>
        <Typography variant="caption">{product.description}</Typography>
      </div>
      <div
        style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}
      >
        <div
          style={{
            margin: '0 5px 0 0',
            width: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="caption"
            align="center"
            style={{ marginBottom: '3px' }}
          >
            Codigo
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            style={{ fontWeight: 'bold' }}
          >
            {product.productId}
          </Typography>
        </div>

        <div
          style={{
            margin: '0 5px 0 0',
            width: '70px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="caption"
            align="center"
            style={{ marginBottom: '3px' }}
          >
            P/U
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            style={{ fontWeight: 'bold' }}
          >
            {product.price}
          </Typography>
        </div>
        <div
          style={{
            margin: '0 5px 0 0',
            width: '70px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="caption"
            align="center"
            style={{
              marginBottom: '3px',
              color: stock <= 0 && 'red',
              fontWeight: stock <= 0 && 'bold'
            }}
          >
            Stock
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            style={{ fontWeight: 'bold', color: stock <= 0 && 'red' }}
          >
            {stock}
          </Typography>
        </div>
        <div
          style={{
            margin: '0 5px',
            width: '90px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant="caption" align="center">
            Sub-total.
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            style={{ fontWeight: 'bold' }}
          >
            {subTotal}
          </Typography>
        </div>
        <div
          style={{
            margin: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            width: '76px',
            paddingTop: '8px'
          }}
        >
          <TextField
            type="number"
            value={amount}
            label="Cantidad"
            variant="outlined"
            margin="dense"
            onChange={e => amountHandle(e.target.value)}
            InputProps={{
              className: classes.input
            }}
            inputProps={{
              style: {
                fontWeight: 'bold',
                fontSize: '0.9rem',
                textAlign: 'right',
                paddingTop: '5px',
                paddingBottom: 'unset'
              }
            }}
          />
        </div>

        <div style={{ margin: '0 10px 0 0', width: '30px' }}>
          <IconButton aria-label="up" onClick={() => removeProduct(product)}>
            <GarbageIcon size={18} color="#E91E63" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

CustomProductListItem.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  remove: PropTypes.func.isRequired
};

const CustomProductListItemStyles = {
  mainContainer: {
    backgroundColor: '#f3f3f3',
    borderRadius: '5px',
    alignItems: 'center',
    height: '70px',
    maxHeight: '75px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: '6px 0',
    padding: '5px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
  }
};

export default CustomProductListItem;
