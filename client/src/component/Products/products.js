import React, { useState } from 'react'
import '../../css/Products/products.css';
import ProductModal from './productModal';
import Bounce from 'react-reveal/Bounce';
 function Products(props) {
  const [prod , setProd] = useState("")
  
  const openModal =(prod)=>{
    setProd(prod)
  }
  const closeModal = () =>{
    setProd(false);
  }
  return (
    <Bounce left cascade>
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
                        <button onClick={()=>props.addToCart(prod)}>Add To Cart</button>
                    </div>
            
            ))}
            <ProductModal prod={prod} closeModal={closeModal}/>
        </div>
    </Bounce>
  )
}
export default Products;