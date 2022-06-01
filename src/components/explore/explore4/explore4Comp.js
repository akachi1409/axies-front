import "./explore4Comp.css";

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import FilterItem2 from "./fliterItem2";

class Explore4Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          like: 100,
          soon: false,
          title: '"The RenaiXance Rising...',
          net: "BSC",
          owner: "SalvadorDali",
          priceItem: "Price",
          price: "4.89ETH",
          bidding: true,
        },
        {
          like: 100,
          soon: false,
          title: '"Space babe - Night 2/25"',
          net: "BSC",
          owner: "SalvadorDali",
          priceItem: "Price",
          price: "4.89ETH",
        },
        {
          like: 100,
          soon: false,
          title: '"CyberPrimal 042 LAN”',
          net: "BSC",
          owner: "SalvadorDali",
          priceItem: "Price",
          price: "4.89ETH",
          bidding: true,
        },
        {
          like: 100,
          soon: false,
          title: '"Crypto Egg Stamp #5”',
          net: "BSC",
          owner: "SalvadorDali",
          priceItem: "Price",
          price: "4.89ETH",
          bidding: true,
        },
        {
          like: 100,
          soon: false,
          title: '"Travel Monkey Club #45”',
          net: "BSC",
          owner: "SalvadorDali",
          priceItem: "Price",
          price: "4.89ETH",
          bidding: true,
        },
        {
          like: 100,
          soon: false,
          title: '"Sir. Lion Swag #371”',
          net: "BSC",
          owner: "SalvadorDali",
          priceItem: "Price",
          price: "4.89ETH",
          bidding: true,
        },
        {
          like: 100,
          soon: false,
          title: '"Cyber Doberman #766”',
          net: "BSC",
          owner: "SalvadorDali",
          priceItem: "Price",
          price: "4.89ETH",
          bidding: true,
        },
        {
          like: 100,
          soon: false,
          title: '"Living Vase 01 by Lanz...',
          net: "BSC",
          owner: "SalvadorDali",
          priceItem: "Price",
          price: "4.89ETH",
          bidding: true,
        },
      ],
    };
  }

  render() {
    return (
      <div className="explore1Comp-layout">
        <Container>
          <Row>
            <Col lg="4">

            </Col>
            <Col lg="8">

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Explore4Comp;
