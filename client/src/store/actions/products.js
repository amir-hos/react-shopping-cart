import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "./type"

export const fetchProducts =()=>{
    return(dispatch)=>{
        fetch('/api/products').then(res => res.json()).then(data =>{
            dispatch({
                type: FETCH_PRODUCTS,
                data: data
            })
        })
    }
}


export const filterSize = (products , value) =>{
    return(dispatch)=>{

        let producstClone = [...products];
        let newProducts = producstClone.filter(p => p.size.indexOf(value) != -1);

        dispatch({
            type: FILTER_SIZE,
            data:{
                size: value,
                products: value == "ALL" ? products : newProducts
            }

        })
    }
    
}

export const filterSort =(products , value)=>{
    return(dispatch)=>{
        let producstClone = [...products];
    let newProducts = producstClone.sort(function(a,b){
      if(value == "lowest"){
        return a.price - b.price
      }else if(value == "highest"){
        return b.price - a.price
      }else{
        return a.id <b.id  ? 1 : -1
      }
    });
    dispatch({
        type: FILTER_SORT,
        data:{
            sort: value,
            products: newProducts
        }
    })
    }
}