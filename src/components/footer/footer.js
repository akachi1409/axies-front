import React, { Component } from "react";

import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Mono_Logo from "../../assets/footer/Logo.png";
import Facebook from "../../assets/footer/facebook.png";
import Twitter from "../../assets/footer/twitter.png";
import Google from "../../assets/footer/google.png";
import Twitch from "../../assets/footer/twitch.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "My Account",
          text: [
            "Authors",
            "Collection",
            "Author Profile",
            "Create Collection",
          ],
        },
        {
          title: "Resources",
          text: ["Help & Support", "Live Auctions", "Item Details", "Activity"],
        },
        {
          title: "Company",
          text: ["About Us", "Contact Us", "Our Blog", "Discover"],
        },
      ],
      isMobile: false,
    };
  }
  render() {
    return (
      <div className="footer-container">
        <Container>
          {/* <section className="footer-section">
            <div className="footer-bar-layout">
              <Row style={{ width: "100%" }}>
                <Col sm="12" md="12" lg="3" className="footer-bar-link">
                  <a href="https://dmc2.tempurl.host/">
                  </a>
                </Col>
                <Col sm="0" md="0" lg="6"></Col>
                <Col sm="12" md="12" lg="3">
                  <div className="footer-followBtn-layout">
                    <div className="footer-followBtn">
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section> */}
          <section className="footer-section1">
            <div className="footer-section1-layout">
              <Row>
                <Col lg="3">
                  <Row>
                    <Col sm="12" md="12" lg="12" className="footer-bar-link">
                      <a href="https://dmc2.tempurl.host/">
                        <img alt="" src={Mono_Logo} />
                      </a>
                    </Col>
                  </Row>
                  <Row>
                    <p className="footer-sectiion1-text">
                      Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                      Quis non, fugit totam vel laboriosam vitae.
                    </p>
                  </Row>
                  <Row>
                    <div className="footer-sectiion-icon">
                      <img
                        alt=""
                        src={Facebook}
                        className="footer-sectiion-icon-round"
                      />
                    </div>
                    <div className="footer-sectiion-icon">
                      <img
                        alt=""
                        src={Twitter}
                        className="footer-sectiion-icon-round"
                      />
                    </div>
                    <div className="footer-sectiion-icon">
                      <img
                        alt=""
                        src={Google}
                        className="footer-sectiion-icon-round"
                      />
                    </div>
                    <div className="footer-sectiion-icon">
                      <img
                        alt=""
                        src={Twitch}
                        className="footer-sectiion-icon-round"
                      />
                    </div>
                  </Row>
                </Col>
                <Col lg="8">
                  <Row>
                    {this.state.data.map((item, index) => (
                      <Col
                        lg="3"
                        md="12"
                        sm="12"
                        className="footer-section1-col"
                        key={index}
                      >
                        <div className="footer-section1-col-wrap">
                          <h4 className="footer-section1-col-title">
                            {item.title}
                          </h4>
                          <div className="footer-section1-col-list">
                            <ul className="foot-section1-col-ul">
                              {item.text.map((t, indexT) => (
                                <li
                                  className="footer-section1-col-li"
                                  key={indexT}
                                >
                                  <a href="#">
                                    <span className="footer-section1-col-text">
                                      {t}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Col>
                    ))}
                    <Col lg="3" md="12" sm="12" className="footer-section1-col">
                      <div className="footer-section1-col-wrap">
                        <h4 className="footer-section1-col-title">
                          Subscribe Us
                        </h4>
                        <div className="footer-section1-col-list">
                            <input className="footer-section1-input" placeholder="info@yourgmail.com"/>
                            {/* <button></button> */}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </section>
          <section className="footer-copyright">
            <Row>
              <p className="footer-copyright-text">
                Copyright © 2021 MOGL. All rights reserved.
              </p>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Footer;
