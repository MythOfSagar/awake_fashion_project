import {
    ADD_ITEM_TO_BASKET_ERROR,
    ADD_ITEM_TO_BASKET_LOADING, ADD_ITEM_TO_BASKET_SUCCESS,
    GET_BASKET_ITEMS_ERROR, GET_BASKET_ITEMS_LOADING,
    GET_BASKET_ITEMS_SUCCESS, REMOVE_BASKET_ITEMS_ERROR,
    REMOVE_BASKET_ITEMS_LOADING, REMOVE_BASKET_ITEMS_SUCCESS,
     UPDATE_BASKET_ITEMS_ERROR, UPDATE_BASKET_ITEMS_LOADING, 
     UPDATE_BASKET_ITEMS_SUCCESS
  } from "./Basket.types";
  
  // Note: Do not update/change the initial state
  const basketInitalState = {
    getBasketItems: {
      loading: false,
      error: false,
    },
    addBasketItem: {
      loading: false,
      error: false,
    },
    updateBasketItem: {
      loading: false,
      error: false,
    },
    removeBasketItem: {
      loading: false,
      error: false,
    },
    data: [],
  };
  export const basketReducer = (state = basketInitalState, action) => {
    switch (action.type) {
      case ADD_ITEM_TO_BASKET_LOADING: {
        return {
          ...state,
          addBasketItem: {
            laoding: true,
            error: false,
          }
        }
      }
      case ADD_ITEM_TO_BASKET_SUCCESS: {
        return {
          ...state,
          addBasketItem: {
            laoding: false,
            error: false,
          },
          data: [...state.data, action.payload]
        }
      }
      case ADD_ITEM_TO_BASKET_ERROR: {
        return {
          ...state,
          addBasketItem: {
            laoding: false,
            error: true,
          }
        }
      }
      case GET_BASKET_ITEMS_LOADING: {
        return {
          ...state,
          getBasketItem: {
            laoding: true,
            error: false,
          }
        }
      }
      case GET_BASKET_ITEMS_SUCCESS: {
        return {
          ...state,
          getBasketItem: {
            laoding: false,
            error: false,
          },
          data: [...action.payload]
        }
      }
      case GET_BASKET_ITEMS_ERROR: {
        return {
          ...state,
          getBasketItem: {
            laoding: false,
            error: true,
          }
        }
      }
      case REMOVE_BASKET_ITEMS_LOADING: {
        return {
          ...state,
          removeBasketItem: {
            laoding: true,
            error: false,
          }
        }
      }
      case REMOVE_BASKET_ITEMS_SUCCESS: {
        const removed = state.data.filter((d) => d.id !== action.payload)
        return {
          ...state,
          removeBasketItem: {
            laoding: false,
            error: false,
          },
          data: [...removed]
        }
      }
      case REMOVE_BASKET_ITEMS_ERROR: {
        return {
          ...state,
          removeBasketItem: {
            laoding: false,
            error: true,
          }
        }
      }
      case UPDATE_BASKET_ITEMS_LOADING: {
        return {
          ...state,
          updateBasketItem: {
            laoding: true,
            error: false,
          }
        }
      }
      case UPDATE_BASKET_ITEMS_SUCCESS: {
        const updated = state.data.map((d) => {
          if (d.id === action.payload.id) {
            return { ...d,...action.payload }
          }
          return d;
        })
        return {
          ...state,
          updateBasketItem: {
            laoding: true,
            error: false,
          },
          data: [...updated]
        }
      }
      case UPDATE_BASKET_ITEMS_ERROR: {
        return {
          ...state,
          updateBasketItem: {
            laoding: false,
            error: true,
          }
        }
      }
  
  
      default: {
        return state;
      }
    }
  };
 