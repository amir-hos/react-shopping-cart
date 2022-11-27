import {combineReducers} from 'redux';
import {productsReducers} from "./productsReducer";
import {cartReducers} from './cartReducers'
export default combineReducers ({
    products: productsReducers,
    cart: cartReducers
})