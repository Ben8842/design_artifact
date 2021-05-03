import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Background from "./img/buildingback.jpg";
import logodark from "./img/logodark.png";
import logolight from "./img/logolight.png";
import { Row, Col, Button } from "reactstrap";

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
        <div className="header">
          <h1>header</h1>
        </div>
        <div
          id="about"
          className="searchbanner"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h6>
            Providing independent research, analysis and resources to facilitate
            informed policy decisions and administration of services
          </h6>

          <Col md="9" sm="0"></Col>
          <Col>
            <input id="searchfield"></input>
            <button id="search">SEARCH</button>
          </Col>
        </div>
        <div className="primary">
          <h1>BOX BUTTONS</h1>
        </div>
        <div className="mainlinks">
          <h1>MAINLINKS</h1>
        </div>
        <div className="footer">
          <h1>FOOTER</h1>
        </div>
      </div>
    );
  }
}

export default App;
