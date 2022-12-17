import { legacy_createStore, compose, applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { basketReducer } from './Basket/Basket.reducer';
import { reducer } from './reducer';
import { wishlistReducer } from './Wishlist/Wishlist.reducer';


// let rootReducer = combineReducers({
//     bask: basketReducer,
//     wish: wishlistReducer,
//     reducer:reducer,
// })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
