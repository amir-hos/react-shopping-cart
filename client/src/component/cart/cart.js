import React, { useState } from 'react';
import '../../css/cart/cart.css';
import CheckOutForm from '../checkOutForm/CheckOutForm';
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';
import {removeCart} from '../../store/actions/cart';
 function Cart(props) {

  const [checkForm , setCheckForm] = useState(false);
  const [value , setValue] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const order ={
      name : value.name ,
      email : value.email
    }
    console.log(order);
  }
  const handleChange =(e)=>{
    setValue((prevState)=>({...prevState , [e.target.name] : [e.target.value]}))
  }
  return (
    <div>
      <div className='cart-wraper'>
        <div className='title'>{props.cartItem.length === 0 ? 'empty cart' : 
        <p>there is {props.cartItem.length} product</p>}
        </div>
        <Fade left cascade>
        <div className='cart-items'>
            {props.cartItem.map(item=>(
              <div className='cart-item' key={item.id}>
              <img src={item.imageUrl} alt=''></img>
              <div className='info'>
                  <p>title: {item.title}</p>
                  <p>qty: {item.qty}</p>
                  <p>price: ${item.price * item.qty}</p>
              </div>
              <button onClick={()=> props.removeCart(item)}>Remove</button>
          </div>
            ))}
        </div>
        </Fade>
        {props.cartItem.length !== 0 && (
          <div className='tatal-cart'>
              <div className='total-price'>total: ${props.cartItem.reduce((acc , p)=>{
                return acc + p.price
              } , 0)}</div>
              <button onClick={()=>setCheckForm(true)}>selectProduct</button>
        </div>
        )}
        
      </div>

      {/* checkOutForm  */}
      <CheckOutForm 
      checkForm={checkForm}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      setCheckForm={setCheckForm}
      />


    </div>
  )
}

export default connect((state)=>{
  return{
    cartItem : state.cart.cartItem
  }
} ,{removeCart})(Cart);