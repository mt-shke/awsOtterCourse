/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar(
    $filter: ModelSubscriptionCarFilterInput
    $owner: String
  ) {
    onCreateCar(filter: $filter, owner: $owner) {
      id
      name
      description
      carType
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar(
    $filter: ModelSubscriptionCarFilterInput
    $owner: String
  ) {
    onUpdateCar(filter: $filter, owner: $owner) {
      id
      name
      description
      carType
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar(
    $filter: ModelSubscriptionCarFilterInput
    $owner: String
  ) {
    onDeleteCar(filter: $filter, owner: $owner) {
      id
      name
      description
      carType
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
