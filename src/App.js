import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Background from "./img/buildingback.jpg";
import logodark from "./img/logodark.png";
import logolight from "./img/logolight.png";
import menu from "./img/menu.png";
import close from "./img/close.png";
import title from "./img/title.png";
import glass from "./img/glass.png";
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
          <div className="left">
            <div
              className="menu"
              style={{
                backgroundImage: `url(${menu})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="logo"
              style={{
                backgroundImage: `url(${logolight})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="title"
              style={{
                backgroundImage: `url(${title})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="right">
            <div className="rightlink">ABOUT US</div>
            <div className="rightlink">EVENTS</div>
            <div className="rightlink">BOARDS & COMMITTEES</div>
            <div
              className="glass"
              style={{
                backgroundImage: `url(${glass})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
        <div
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
