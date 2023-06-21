/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCarInput = {
  id?: string | null,
  name: string,
  description: string,
  carType: carEnum,
};

export enum carEnum {
  berline = "berline",
  break = "break",
  suv = "suv",
  coupe = "coupe",
}


export type ModelCarConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  carType?: ModelcarEnumInput | null,
  and?: Array< ModelCarConditionInput | null > | null,
  or?: Array< ModelCarConditionInput | null > | null,
  not?: ModelCarConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelcarEnumInput = {
  eq?: carEnum | null,
  ne?: carEnum | null,
};

export type Car = {
  __typename: "Car",
  id: string,
  name: string,
  description: string,
  carType: carEnum,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateCarInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  carType?: carEnum | null,
};

export type DeleteCarInput = {
  id: string,
};

export type ModelCarFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  carType?: ModelcarEnumInput | null,
  and?: Array< ModelCarFilterInput | null > | null,
  or?: Array< ModelCarFilterInput | null > | null,
  not?: ModelCarFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCarConnection = {
  __typename: "ModelCarConnection",
  items:  Array<Car | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCarFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  carType?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCarFilterInput | null > | null,
  or?: Array< ModelSubscriptionCarFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateCarMutationVariables = {
  input: CreateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type CreateCarMutation = {
  createCar?:  {
    __typename: "Car",
    id: string,
    name: string,
    description: string,
    carType: carEnum,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCarMutationVariables = {
  input: UpdateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type UpdateCarMutation = {
  updateCar?:  {
    __typename: "Car",
    id: string,
    name: string,
    description: string,
    carType: carEnum,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCarMutationVariables = {
  input: DeleteCarInput,
  condition?: ModelCarConditionInput | null,
};

export type DeleteCarMutation = {
  deleteCar?:  {
    __typename: "Car",
    id: string,
    name: string,
    description: string,
    carType: carEnum,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetCarQueryVariables = {
  id: string,
};

export type GetCarQuery = {
  getCar?:  {
    __typename: "Car",
    id: string,
    name: string,
    description: string,
    carType: carEnum,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCarsQueryVariables = {
  filter?: ModelCarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCarsQuery = {
  listCars?:  {
    __typename: "ModelCarConnection",
    items:  Array< {
      __typename: "Car",
      id: string,
      name: string,
      description: string,
      carType: carEnum,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
  owner?: string | null,
};

export type OnCreateCarSubscription = {
  onCreateCar?:  {
    __typename: "Car",
    id: string,
    name: string,
    description: string,
    carType: carEnum,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCarSubscription = {
  onUpdateCar?:  {
    __typename: "Car",
    id: string,
    name: string,
    description: string,
    carType: carEnum,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCarSubscription = {
  onDeleteCar?:  {
    __typename: "Car",
    id: string,
    name: string,
    description: string,
    carType: carEnum,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
