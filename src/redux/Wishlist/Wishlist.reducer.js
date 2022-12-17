import {
    ADD_ITEM_TO_WISHLIST_ERROR,
    ADD_ITEM_TO_WISHLIST_LOADING, ADD_ITEM_TO_WISHLIST_SUCCESS,
    GET_WISHLIST_ITEMS_ERROR, GET_WISHLIST_ITEMS_LOADING,
    GET_WISHLIST_ITEMS_SUCCESS, REMOVE_WISHLIST_ITEMS_ERROR,
    REMOVE_WISHLIST_ITEMS_LOADING, REMOVE_WISHLIST_ITEMS_SUCCESS,
     UPDATE_WISHLIST_ITEMS_ERROR, UPDATE_WISHLIST_ITEMS_LOADING, 
     UPDATE_WISHLIST_ITEMS_SUCCESS
  } from "./Wishlist.types";
  
  // Note: Do not update/change the initial state
  const wishlistInitalState = {
    getWishlistItems: {
      loading: false,
      error: false,
    },
    addWishlistItem: {
      loading: false,
      error: false,
    },
    updateWishlistItem: {
      loading: false,
      error: false,
    },
    removeWishlistItem: {
      loading: false,
      error: false,
    },
    data: [],
  };
  export const wishlistReducer = (state = wishlistInitalState, action) => {
    switch (action.type) {
      case ADD_ITEM_TO_WISHLIST_LOADING: {
        return {
          ...state,
          addWishlistItem: {
            laoding: true,
            error: false,
          }
        }
      }
      case ADD_ITEM_TO_WISHLIST_SUCCESS: {
        return {
          ...state,
          addWishlistItem: {
            laoding: false,
            error: false,
          },
          data: [...state.data, action.payload]
        }
      }
      case ADD_ITEM_TO_WISHLIST_ERROR: {
        return {
          ...state,
          addWishlistItem: {
            laoding: false,
            error: true,
          }
        }
      }
      case GET_WISHLIST_ITEMS_LOADING: {
        return {
          ...state,
          getWishlistItem: {
            laoding: true,
            error: false,
          }
        }
      }
      case GET_WISHLIST_ITEMS_SUCCESS: {
        return {
          ...state,
          getWishlistItem: {
            laoding: false,
            error: false,
          },
          data: [...action.payload]
        }
      }
      case GET_WISHLIST_ITEMS_ERROR: {
        return {
          ...state,
          getWishlistItem: {
            laoding: false,
            error: true,
          }
        }
      }
      case REMOVE_WISHLIST_ITEMS_LOADING: {
        return {
          ...state,
          removeWishlistItem: {
            laoding: true,
            error: false,
          }
        }
      }
      case REMOVE_WISHLIST_ITEMS_SUCCESS: {
        const removed = state.data.filter((d) => d.id !== action.payload)
        return {
          ...state,
          removeWishlistItem: {
            laoding: false,
            error: false,
          },
          data: [...removed]
        }
      }
      case REMOVE_WISHLIST_ITEMS_ERROR: {
        return {
          ...state,
          removeWishlistItem: {
            laoding: false,
            error: true,
          }
        }
      }
      case UPDATE_WISHLIST_ITEMS_LOADING: {
        return {
          ...state,
          updateWishlistItem: {
            laoding: true,
            error: false,
          }
        }
      }
      case UPDATE_WISHLIST_ITEMS_SUCCESS: {
        const updated = state.data.map((d) => {
          if (d.id === action.payload.id) {
            return { ...d,...action.payload }
          }
          return d;
        })
        return {
          ...state,
          updateWishlistItem: {
            laoding: true,
            error: false,
          },
          data: [...updated]
        }
      }
      case UPDATE_WISHLIST_ITEMS_ERROR: {
        return {
          ...state,
          updateWishlistItem: {
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
 