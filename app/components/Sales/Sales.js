import React, { useState, Fragment } from 'react';
import { useQuery } from 'react-apollo';
import { PRODUCTS_BY_FILTER_GRAPHQL_QUERY } from '../Products/ProductQueries';
import CustomToolBar from '../CustomToolBar/CustomToolBar';
import ProductListItem from '../Products/ProductListItem';
import SearchProducts from '../Products/SearchProducts';
import ProductList from '../Products/ProductList';
import SaleDetail from './SaleDetail';

const productRenderOption = selectItemHandle => optionParam => (
  <>
    <ProductListItem
      key={optionParam.productId}
      product={optionParam}
      selectedItemEvent={option => selectItemHandle(option)}
    />
  </>
);

const Sales = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const properties = ['productName', 'productId'];
  let options = [];

  const { data } = useQuery(PRODUCTS_BY_FILTER_GRAPHQL_QUERY, {
    variables: { query, properties },
    fetchPolicy: 'cache-and-network'
  });

  if (data) {
    options = data.productsByFilter;
  }

  const addProductEvent = product => {
    // TODO: Add message if the product was selected before.
    if (!products.some(p => p.productId === product.productId)) {
      setProducts([...products, product]);
    }
  };

  const removeProduct = product => {
    setProducts(products.filter(p => p.productId !== product.productId));
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      <CustomToolBar title="Ventas" />
      <div style={salesStyles.bodyContainer}>
        <div style={salesStyles.productsContainer}>
          <SearchProducts
            addProductEvent={addProductEvent}
            options={options}
            onChangeEvent={setQuery}
            renderOption={productRenderOption}
          />
          <ProductList products={products} remove={removeProduct} />
        </div>
        <div style={salesStyles.saleDetailContainer}>
          <SaleDetail />
        </div>
      </div>
    </div>
  );
};

const salesStyles = {
  mainContainer: { display: 'flex', flexDirection: 'column' },
  bodyContainer: { display: 'flex', flexDirection: 'row', padding: '5px' },
  productsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    height: '100vh',
    marginRight: '2.5px'
  },
  saleDetailContainer: { width: '30%', marginLeft: '2.5px' }
};

export default Sales;
