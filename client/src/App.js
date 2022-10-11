
import React, { Component } from "react";
import Footer from "./component/Footer/footer";
import Header from "./component/Header/header";
import { words } from "./words";
class App extends Component {
  render(){
  return (
    <div className="App">
      <Header/>
      <main>{words.contentTitle}</main>
      <Footer /> 
    </div>
  );
  }
}

export default App;
