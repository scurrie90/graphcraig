/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGraphCraig = /* GraphQL */ `
  mutation CreateGraphCraig(
    $input: CreateGraphCraigInput!
    $condition: ModelGraphCraigConditionInput
  ) {
    createGraphCraig(input: $input, condition: $condition) {
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
export const updateGraphCraig = /* GraphQL */ `
  mutation UpdateGraphCraig(
    $input: UpdateGraphCraigInput!
    $condition: ModelGraphCraigConditionInput
  ) {
    updateGraphCraig(input: $input, condition: $condition) {
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
export const deleteGraphCraig = /* GraphQL */ `
  mutation DeleteGraphCraig(
    $input: DeleteGraphCraigInput!
    $condition: ModelGraphCraigConditionInput
  ) {
    deleteGraphCraig(input: $input, condition: $condition) {
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
