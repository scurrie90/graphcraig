/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGraphCraig = /* GraphQL */ `
  query GetGraphCraig($id: ID!) {
    getGraphCraig(id: $id) {
      id
      title
      location
      price
      seller
      category
      description
      imgUrl
      createdAt
      updatedAt
    }
  }
`;
export const listGraphCraigs = /* GraphQL */ `
  query ListGraphCraigs(
    $filter: ModelGraphCraigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGraphCraigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        location
        price
        seller
        category
        description
        imgUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
