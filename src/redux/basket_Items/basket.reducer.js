import React from "react";
import {
  GET_BASKET_ERROR,
  GET_BASKET_LOADING,
  GET_BASKET_SUCCESS,
  remove_BASKET_ITEM,
} from "./basket.actiontypes";
import { SIGN_IN } from "./basket.actiontypes";

const initialstate = {
  basket: [],
  loading: false,
  error: false,
  isAuth: false,
  user: "",
};

export const basketreducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case remove_BASKET_ITEM: {
      return {
        ...state,
        basket: payload,
      };
    }

    case SIGN_IN: {
      return {
        ...state,
        isAuth: true,
        user: payload,
      };
    }

    case GET_BASKET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_BASKET_SUCCESS: {
      return {
        ...state,
        loading: false,
        basket: payload,
      };
    }
    case GET_BASKET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
