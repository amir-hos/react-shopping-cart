import React from 'react'
import '../../css/Products/products.css';
 function Products(props) {
  return (
    
    <div className="products">
        {props.products.map(prod =>(
            <div key={prod.id} className='prod-item'>
                
                    <img src={prod.imageUrl} alt={prod.title}></img>
                    <div className='prod-desc'>
                        <p>{prod.title}</p>
                        <span>{prod.price}</span>
                    </div>
                    <button>Add To Cart</button>
                </div>
        
        ))}
    </div>
    
  )
}
export default Products;