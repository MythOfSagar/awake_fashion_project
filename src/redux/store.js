import {legacy_createStore,compose,applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { basketreducer } from './basket/basket.reducer';
import { reducer } from './reducer';

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const globalReducer=combineReducers({
    basketreducer:basketreducer,
    reducer:reducer
})

export const store = legacy_createStore(globalReducer,composeEnhancers(applyMiddleware(thunk)));
