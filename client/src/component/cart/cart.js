import React, { useState } from 'react';
import '../../css/cart/cart.css';
import CheckOutForm from '../checkOutForm/CheckOutForm';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {removeCart} from '../../store/actions/cart';
 function Cart(props) {

  const [checkForm , setCheckForm] = useState(false);
  const [order , setOrder] = useState(false);
  const [value , setValue] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const order ={
      name : value.name ,
      email : value.email
    }
    setOrder(order);
  }
  const handleChange =(e)=>{
    setValue((prevState)=>({...prevState , [e.target.name] : [e.target.value]}))
  }
  const closeModal = () =>{
    setOrder(false);
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
        {/* modal to show result of shopping  */}
        <>
        {order &&
            <Modal isOpen={order} onRequestClose={closeModal}>
                <div className="order-info">
                    <span className="close-icon" onClick={closeModal}> &times; </span>
                    <p className="alert-success"> order done success </p>
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>{order.name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{order.email}</td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td>{props.cartItem.reduce( (a ,pr)=>{
                              return a + (pr.price * pr.qty)
                            } , 0)}</td>
                        </tr>
                        <tr>
                            <td>
                                Selected Items:
                            </td>
                            <td>{props.cartItem.map(p => (
                                <div className="cart-data">
                                    <p>Number of this products: {p.qty}</p>
                                    <p>Title of  products: {p.title}</p>
                                </div>
                            ))}</td>
                        </tr>
                    </table>
                </div>
            </Modal> 
        }
        </>

        
        {props.cartItem.length !== 0 && (
          <div className='tatal-cart'>
              <div className='total-price'>total: ${props.cartItem.reduce((acc , p)=>{
                return (acc + (p.price * p.qty)) 
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