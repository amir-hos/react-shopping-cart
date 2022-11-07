import React from 'react'
import '../../css/Filter/filter.css';
import Flip from 'react-reveal/Flip';
import {connect} from 'react-redux';
import { filterSize , filterSort } from '../../store/actions/products';
 function Filter(props) {
  return (
    <Flip bottom cascade>
        {props.filterProduct && <div className='filter-wraper'>
          <h2 className='filter-title'>filter</h2>
          <div className='num-of-product'>number of product {props.filterProduct.length}</div>
          <div className='filter-size'>
            <span>filter</span>
            <select className='filter-select' value={props.size} onChange={(e)=>{props.filterSize(props.products , e.target.value)}}>
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
            <select className='filter-select' value={props.sort} onChange={(e)=>{props.filterSort(props.products , e.target.value)}}>
                <option value="lastest">lastest</option>
                <option value="lowest">lowest</option>
                <option value="highest">highest</option>
            </select>
          </div>
        </div>}
    </Flip>
  )
}
export default connect((state)=>{
  return{
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.products,
    filterProduct: state.products.filterProduct
  }
},{filterSize , filterSort})(Filter);