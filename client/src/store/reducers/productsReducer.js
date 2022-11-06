
import { FETCH_PRODUCTS } from '../actions/type';

export const productsReducers =(state ={}, action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return {products: action.data}

        default: return state
    }
}