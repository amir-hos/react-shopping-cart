import React from 'react'
import '../../css/Filter/filter.css';
 function Filter(props) {
  return (
    <div className='filter-wraper'>
      <h2 className='filter-title'>filter</h2>
      <div className='num-of-product'>number of product {props.productNumber}</div>
      <div className='filter-size'>
        <span>filter</span>
        <select className='filter-select' value={props.size} onChange={props.handleFilterBySize}>
            <option value="ALL">ALL</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>
      </div>

      <div className='filter-order'>
        <span>order</span>
        <select className='filter-select' value={props.order} onChange={props.handleFilterByOrder}>
            <option value="lastest">lastest</option>
            <option value="lowest">lowest</option>
            <option value="highest">highest</option>
        </select>
      </div>
    </div>
  )
}
export default Filter;