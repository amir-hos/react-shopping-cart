
import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from '../actions/type';

export const productsReducers =(state ={}, action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return {products: action.data , filterProduct: action.data}

            case FILTER_SIZE:
                return{
                    ...state,
                    size: action.data.size,
                    filterProduct: action.data.products
                }

            case FILTER_SORT:
                return{
                    ...state,
                    sort: action.data.sort,
                    filterProduct: action.data.products
                }
        default: return state
    }
}

