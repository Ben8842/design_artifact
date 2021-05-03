import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Background from "./img/buildingback.jpg";
import logodark from "./img/logodark.png";
import logolight from "./img/logolight.png";
import logohover from "./img/logohover.png";
import menu from "./img/menu.png";
import close from "./img/close.png";
import title from "./img/title.png";
import glass from "./img/glass.png";
import boxone from "./img/boxdataresearch.png";
import boxtwo from "./img/boxgeography.png";
import boxthree from "./img/boxlegislative.png";
import boxfour from "./img/boxprograms.png";
import search from "./img/search.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    console.log(menu);
  }

  togglemenu() {
    console.log("hello toggle");
    if (this.state.menu === true) {
      this.setState({ menu: false });
    } else if (this.state.menu === false) {
      this.setState({ menu: true });
    }
    console.log(this.state.menu);
  }

  render() {
    const menuextended = (
      <div className="header">
        <div className="left">
          <div> Home</div>
          <div>News & Events</div>
          <div> About Us</div>
          <div>Contact Us</div>
          <div>Boards & Committees</div>
        </div>
        <div className="right">
          <div>DATA & RESEARCH</div>
          <div>LEGISLATIVE FISCAL IMPACTS</div>
          <div>GEOGRAPHY & MAPPING</div>
          <div>PROGRAMS & SERVICES</div>
        </div>
      </div>
    );

    return (
      <div className="App">
        <div className="header">
          <div className="left">
            <button
              onClick={() => this.togglemenu()}
              className="menu"
              style={{
                backgroundImage: `url(${menu})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></button>
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
        {this.state.menu ? menuextended : null}

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

          <Col>
            <input id="searchfield" placeholder="Search rfa.sc.gov"></input>
            <button id="search">
              <div
                className="searching"
                style={{
                  backgroundImage: `url(${search})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </button>
          </Col>
        </div>
        <div className="primary">
          <button className="boxbutton">
            <div
              className="box"
              style={{
                backgroundImage: `url(${boxone})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </button>
          <button className="boxbutton">
            <div
              className="box"
              style={{
                backgroundImage: `url(${boxtwo})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </button>
          <button className="boxbutton">
            <div
              className="box"
              style={{
                backgroundImage: `url(${boxthree})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </button>
          <button className="boxbutton">
            <div
              className="box"
              style={{
                backgroundImage: `url(${boxfour})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </button>
        </div>
        <div className="mainlinks">
          <h2>POPULAR SERVICES AND LINKS</h2>
          <Row xs="1" sm="1" md="3" lg="3">
            <Col>
              <ul>
                <li>Overview and History of the South Carolina State Budget</li>
                <li>Overview and History of the South Carolina State Budget</li>
                <li>Overview and History of the South Carolina State Budget</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Overview and History of the South Carolina State Budget</li>
                <li>Overview and History of the South Carolina State Budget</li>
                <li>Overview and History of the South Carolina State Budget</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Overview and History of the South Carolina State Budget</li>
                <li>Overview and History of the South Carolina State Budget</li>
                <li>Overview and History of the South Carolina State Budget</li>
              </ul>
            </Col>
          </Row>

          <Container>
            <Row xs="1" sm="2" md="2" lg="2">
              <Col>
                <h3>Recent Updates</h3>
                <ul class="no-bullets">
                  <li>Local Government Finance</li>
                  <li>Transportation Network Carrier Maps</li>
                  <li>BEA Long-Range General Fund Revenue Plan</li>
                  <li>Budget Development</li>
                  <li>November 2019 General FUnd Revenue Digest</li>
                  <Button>VIEW MORE</Button>
                </ul>
              </Col>

              <Col>
                <h3>Calendar Events</h3>
                <ul className="no-bullets">
                  <li>Board of Economic Advisors Meeting</li>
                  <li>Board of Economic Advisors Meeting</li>
                  <li>Board of Economic Advisors Meeting</li>
                  <li>Board of Economic Advisors Meeting</li>

                  <Button>VIEW ALL EVENTS</Button>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer">
          <div className="leftfooter">
            <h6>South Carolina</h6>
            <h6>Revenue and Fiscal Affairs Office</h6>
            <div
              className="logodark"
              style={{
                backgroundImage: `url(${logodark})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="middlefooter">
            <h6>Privacy Statement</h6>
            <h6>FOIA</h6>
            <h6>Disclosures and Reporting</h6>
            <h6>Report Fraud</h6>
            <h6>Accessibility</h6>
            <h6>Contact Us</h6>
          </div>
          <div className="rightfooter">
            <h6>MAIN OFFICE</h6>
            <h6>GEODETIC SURVEY SECTION</h6>
            <h6>Disclosures and Reporting</h6>
            <h6>HEALTH AND DEMOGRAPHICS DIVISION</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
