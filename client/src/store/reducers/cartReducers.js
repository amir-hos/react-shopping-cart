import { ADD_CART, REMOVE_CART } from "../actions/type";

export const cartReducers =(state={
    cartItem: JSON.parse(localStorage.getItem('cartItem')) || [] 
} , action)=>{
    switch(action.type){
        case ADD_CART:
            return{
                cartItem: action.data.cartItem
            }
        case REMOVE_CART:
            return{
                cartItem: action.data.cartItem
            }
        default:
            return state
    } 
}