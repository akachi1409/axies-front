import React, { Component } from "react";

import "./footer.css";
import { Container, Row } from "react-bootstrap";
// import Mono_Logo from "../../assets/footer/Logo.png";
import Facebook from "../../assets/footer/facebook.png";
import Twitter from "../../assets/footer/twitter.png";
import Google from "../../assets/footer/google.png";
import Twitch from "../../assets/footer/twitter.png";

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
          <section className="footer-section1">
            <div className="footer-section1-layout">
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
            </div>
            <Row>
              <p className="footer-sectiion1-text">
                <span className="footer-sectiion1-span">CATENA</span> is a connection from the past to the present to the future
              </p>
            </Row>
          </section>
          <section className="footer-copyright">
            <Row>
              <p className="footer-copyright-text">
              Copyright 2022 Catena. All Rights Reserved.
              </p>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Footer;
