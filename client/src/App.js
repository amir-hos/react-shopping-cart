
import React, { Component } from "react";
import Footer from "./component/Footer/footer";
import Header from "./component/Header/header";
class App extends Component {
  render(){
  return (
    <div className="App">
      <Header/>
      <main>content</main>
      <Footer /> 
    </div>
  );
  }
}

export default App;
