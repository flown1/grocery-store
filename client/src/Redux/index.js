import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import products from './reducers/productsReducer'

export default combineReducers({
  products,
})
