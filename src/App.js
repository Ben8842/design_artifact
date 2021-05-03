import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }

  render() {
    return (
      <div className="App">
        Hello World<div>hello again</div>
      </div>
    );
  }
}

export default App;
