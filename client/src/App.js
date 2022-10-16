
import React, { useState } from "react";
import Footer from "./component/Footer/footer";
import Header from "./component/Header/header";
import Products from "./component/Products/products";
import data from './data.json';
/*import { words } from "./words";*/
function App() {

  const [products , setProducts] = useState(data)

  return (
    <div className="App">
      <Header/>
      <main className="wrapper">
        <Products products={products}/>
        <div className="filter">filter</div>
        </main>
      <Footer /> 
    </div>
  );
  
}

export default App;
