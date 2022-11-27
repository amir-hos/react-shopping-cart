import { ADD_CART, REMOVE_CART } from "./type";

export const addCart = (product)=>{
    return(dispatch , getState)=>{
        const cartItem = getState().cart.cartItem
        const cartClone = [...cartItem];
        var isProductExist = false;
        cartClone.forEach(p=>{
          if(p.id == product.id){
            p.qty++;
            isProductExist =true;
          }
        })
        if(!isProductExist){
          cartClone.push({...product , qty: 1});
        }
        dispatch({
            type: ADD_CART,
            data:{
                cartItem: cartClone
            }
          })
          localStorage.setItem('cartItem', JSON.stringify(cartItem))
      }
      
    }
export const removeCart =(product)=>{
    return(dispatch , getState)=>{
        const cartItem = getState().cart.cartItem
        const cartClone =[...cartItem];
        const updateCartItem = cartClone.filter(p=> p.id != product.id)
        dispatch({
            type: REMOVE_CART,
            data:{
                cartItem: updateCartItem
            }
        })
        localStorage.setItem('cartItem', JSON.stringify(updateCartItem))
    }
}