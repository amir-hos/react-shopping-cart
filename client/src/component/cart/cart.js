import React from 'react';
import '../../css/cart/cart.css';
 function Cart(props) {
  return (
    <div>
      <div className='cart-wraper'>
        <div className='title'>{props.cartItem.length === 0 ? 'empty cart' : 
        <p>there is {props.cartItem.length} product</p>}
        </div>
        <div className='cart-items'>
            {props.cartItem.map(item=>(
              <div className='cart-item' key={item.id}>
              <img src={item.imageUrl} alt=''></img>
              <div className='info'>
                  <p>title: {item.title}</p>
                  <p>qty: {item.qty}</p>
                  <p>price: ${item.price}</p>
              </div>
              <button onClick={()=> props.removeCart(item)}>Remove</button>
          </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cart