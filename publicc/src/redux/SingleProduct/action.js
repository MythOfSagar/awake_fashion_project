import * as types from "./actionType";

export const updateSingleProduct = (payload) => {
  return {
    type: types.SINGLE_PRODUCT,
    payload,
  };
};

export const updateCart = (payload) => {
  return {
    type: types.UPDATE_DATA,
    payload,
  };
};
