import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./Basket/Basket.reducer";
import { basketreducer } from "./basket_Items/basket.reducer";
import { reducer } from "./reducer";
import { wishlistReducer } from "./Wishlist/Wishlist.reducer";

const globalReducer = combineReducers({
  basketreducer: basketreducer,
  bask: basketReducer,
  wish: wishlistReducer,
  reducer: reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  globalReducer,
  composeEnhancers(applyMiddleware(thunk))
);
