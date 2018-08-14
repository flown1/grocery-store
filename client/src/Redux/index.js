import { combineReducers } from 'redux'
import productsReducer from "./reducers/productsReducer";
import userReducer from "./reducers/userReducer";

export default combineReducers({
    productsReducer,
    userReducer
})
