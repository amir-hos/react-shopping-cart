import React, { useEffect, useState } from 'react'
import '../../css/Products/products.css';
import ProductModal from './productModal';
import Bounce from 'react-reveal/Bounce';
import {connect} from 'react-redux';
import { fetchProducts } from '../../store/actions/products';
 function Products(props) {
  const [prod , setProd] = useState("")
  
  const openModal =(prod)=>{
    setProd(prod)
  }
  const closeModal = () =>{
    setProd(false);
  }

  useEffect(()=>{
    props.fetchProducts()
  } , [])
  return (
    <Bounce left cascade>
        <div className="products">
            {props.products && props.products.length? props.products.map(prod =>(
                <div key={prod.id} className='prod-item'>
                    
                        <a href='#' onClick={()=> openModal(prod)} >
                          <img src={prod.imageUrl} alt={prod.title}></img>
                        </a>
                        <div className='prod-desc'>
                            <p>{prod.title}</p>
                            <span>{prod.price}$</span>
                        </div>
                        <button onClick={()=>props.addToCart(prod)}>Add To Cart</button>
                    </div>
            
            )) : "loading"}
            <ProductModal prod={prod} closeModal={closeModal}/>
        </div>
    </Bounce>
  )
}
export default connect( (state)=>{ 
  return{
    products : state.products.products
  }
},{fetchProducts} )(Products);