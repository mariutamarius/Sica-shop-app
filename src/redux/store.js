import {createStore, combineReducers, applyMiddleware} from 'redux';
import { cartReducer } from './reducers/cart';
import {userReducer} from './reducers/user';
import thunk from 'redux-thunk';
import favoriteReducer from "./reducers/favorite";

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    favorite: favoriteReducer, 
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;