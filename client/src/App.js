
import React, { useEffect, useState } from "react";
import Cart from "./component/cart/cart";
import Filter from "./component/Filter/filter";
import Footer from "./component/Footer/footer";
import Header from "./component/Header/header";
import Products from "./component/Products/products";
import data from './data.json';
import {Provider} from 'react-redux';
import store from "./store/store";
/*import { words } from "./words";*/
function App() {

  const [products , setProducts] = useState(data)

  const [size , setSize] =useState("");
  const [order , setOrder] =useState("");
  const [cartItem , setCartItem] = useState(JSON.parse(localStorage.getItem('cartItem')) || []);

  const addToCart =(product)=>{
    let cartClone = [...cartItem];
    var isProductExist = false;
    cartClone.forEach(p=>{
      if(p.id == product.id){
        p.qty++;
        isProductExist =true;
      }
    })
    if(!isProductExist){
      cartClone.push({...product , qty: 1});
    }
    setCartItem(cartClone);
  }
  useEffect(()=>{
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  },[cartItem])
  const removeCart =(product)=>{
    let cartClone =[...cartItem];
    setCartItem(cartClone.filter(p=> p.id != product.id))
  }
  const handleFilterBySize = (e)=>{
    setSize(e.target.value);
    if (e.target.value == "ALL"){
      setProducts(data);
    }else{
      let productclone = [...products];
      let newProducts = productclone.filter(p => p.size.indexOf(e.target.value) != -1);
      setProducts(newProducts)
    }
  }

  const handleFilterByOrder = (e)=>{
    let order=e.target.value
    setOrder(order);
    let productclone = [...products];
    let newProducts = productclone.sort(function(a,b){
      if(order == "lowest"){
        return a.price - b.price
      }else if(order == "highest"){
        return b.price - a.price
      }else{
        return a.id <b.id  ? 1 : -1
      }
    });
    setProducts(newProducts)
  }
  return (
    <Provider store={store}>
        <div className="App">
          <Header/>
          <main>
            <div className="wrapper">
            <Products products={products} addToCart={addToCart} />
            <Filter className='filter'
            productNumber={products.length}
            size={size}
            order={order}
            handleFilterBySize={handleFilterBySize}
            handleFilterByOrder={handleFilterByOrder}
            />
            </div>
            <Cart cartItem={cartItem} removeCart={removeCart}/>
            </main>
      
          <Footer /> 
        </div>
    </Provider>
  );
  
}

export default App;
