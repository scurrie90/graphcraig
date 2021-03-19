/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewPost = /* GraphQL */ `
  query GetNewPost($id: ID!) {
    getNewPost(id: $id) {
      id
      title
      price
      location
      seller
      category
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNewPosts = /* GraphQL */ `
  query ListNewPosts(
    $filter: ModelNewPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        location
        seller
        category
        image
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
