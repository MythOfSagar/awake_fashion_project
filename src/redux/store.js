import {legacy_createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducer';

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
