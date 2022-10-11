
import React, { Component } from "react";
import Header from "./component/Header/header";
class App extends Component {
  render(){
  return (
    <div className="App">
      <Header/>
      <main>content</main>
      <footer>footer</footer>
    </div>
  );
  }
}

export default App;
