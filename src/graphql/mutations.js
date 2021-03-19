/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewPost = /* GraphQL */ `
  mutation CreateNewPost(
    $input: CreateNewPostInput!
    $condition: ModelNewPostConditionInput
  ) {
    createNewPost(input: $input, condition: $condition) {
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
export const updateNewPost = /* GraphQL */ `
  mutation UpdateNewPost(
    $input: UpdateNewPostInput!
    $condition: ModelNewPostConditionInput
  ) {
    updateNewPost(input: $input, condition: $condition) {
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
export const deleteNewPost = /* GraphQL */ `
  mutation DeleteNewPost(
    $input: DeleteNewPostInput!
    $condition: ModelNewPostConditionInput
  ) {
    deleteNewPost(input: $input, condition: $condition) {
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
