import React, { useState } from 'react'
import '../../css/Products/products.css';
import ProductModal from './productModal';
 function Products(props) {
  const [prod , setProd] = useState("")
  
  const openModal =(prod)=>{
    setProd(prod)
  }
  const closeModal = () =>{
    setProd(false);
  }
  return (
    
    <div className="products">
        {props.products.map(prod =>(
            <div key={prod.id} className='prod-item'>
                
                    <a href='#' onClick={()=> openModal(prod)} >
                      <img src={prod.imageUrl} alt={prod.title}></img>
                    </a>
                    <div className='prod-desc'>
                        <p>{prod.title}</p>
                        <span>{prod.price}$</span>
                    </div>
                    <button>Add To Cart</button>
                </div>
        
        ))}
        <ProductModal prod={prod} closeModal={closeModal}/>
    </div>
    
  )
}
export default Products;