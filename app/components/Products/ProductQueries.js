import gql from 'graphql-tag';

export const PRODUCTS_GRAPHQL_QUERY = gql`
  query products {
    products {
      id
      productId
      productName
      description
      availableQuantity
      isAvailable
      price
    }
  }
`;

export const PRODUCTS_BY_FILTER_GRAPHQL_QUERY = gql`
  query productsByFilter($query: String, $properties: [String]) {
    productsByFilter(query: $query, properties: $properties) {
      id
      productId
      productName
      description
      availableQuantity
      isAvailable
      price
    }
  }
`;
