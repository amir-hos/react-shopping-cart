
import React, { useState } from "react";
import Filter from "./component/Filter/filter";
import Footer from "./component/Footer/footer";
import Header from "./component/Header/header";
import Products from "./component/Products/products";
import data from './data.json';
/*import { words } from "./words";*/
function App() {

  const [products , setProducts] = useState(data)

  const [size , setSize] =useState("");
  const [order , setOrder] =useState("");

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
    <div className="App">
      <Header/>
      <main className="wrapper">
        <Products products={products}/>
        <Filter className='filter'
        size={size}
        order={order}
        handleFilterBySize={handleFilterBySize}
        handleFilterByOrder={handleFilterByOrder}
        />
        </main>
      <Footer /> 
    </div>
  );
  
}

export default App;
