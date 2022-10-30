import React from 'react'
import '../../css/checkOutForm/CheckOutForm.css';
 function CheckOutForm(props) {
  return (
    <>
      {props.checkForm  && 
        <div className='checkout-form'>
        <div className='close-icon' onClick={()=>props.setCheckForm(false)}>&times;</div>
        <form onSubmit={props.handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" required name="name" onChange={props.handleChange} />
          </div>
          <div>
            <label>Email</label>
            <input type="text" required name="email" onChange={props.handleChange}/>
          </div>
          <div>
            <button>make order</button>
          </div>
        </form>
      </div> 
      }
    </>
  )
}
export default CheckOutForm;
