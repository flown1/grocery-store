import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import combineReducers from "./index";

import productsReducer from './reducers/productsReducer';

const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(productsReducer, middleware);