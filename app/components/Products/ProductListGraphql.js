import React from 'react';
import { useQuery } from 'react-apollo';
import { PRODUCTS_BY_FILTER_GRAPHQL_QUERY } from './ProductQueries';

const getProductListGraphql = (query, properties) => {
  const { loading, error, data } = useQuery(PRODUCTS_BY_FILTER_GRAPHQL_QUERY, {
    variables: { query, properties }
  });

  if (loading) {
    return [];
  }

  if (error) {
    return [];
  }

  return data;
};

export default getProductListGraphql;
