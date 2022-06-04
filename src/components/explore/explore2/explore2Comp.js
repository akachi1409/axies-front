import "./explore2Comp.css";

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Explore2Item from "./explore2Item";
class Explore2Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          text: "Collected",
        },
        {
          text: "Created",
        },
        {
          text: "Favourite",
        },
        // {
        //   text: "Collectibles",
        // },
        // {
        //   text: "Sports",
        // },
      ],
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
          bidding: true,
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
      <div className="explore2Comp-layout">
        <Container>
          <Row>
            <h2 className="explore2Comp-user">My Username</h2>
          </Row>
          <p className="explore2Comp-wallet">0xf4165678e707125d1d581877417272a3100c251b</p>
          <hr/>
          <Row>
            <Col lg="6">
              {this.state.buttons.map((item, index) => (
                <button key={index} className="explore2Comp-button">
                  {item.text}
                </button>
              ))}
            </Col>
            <Col lg="6">
              <select className="explore2Comp-select">
                <option> Artworks</option>
                <option>Music</option>
                <option>Domain Names</option>
                <option>Virtual World</option>
                <option>Trading Cards</option>
                <option>Sports</option>
                <option>Utility</option>
              </select>
              <select className="explore2Comp-select">
                <option>Sort By</option>
                <option>Music</option>
                <option>Domain Names</option>
                <option>Virtual World</option>
                <option>Trading Cards</option>
                <option>Sports</option>
                <option>Utility</option>
              </select>
            </Col>
          </Row>
          <Row>
            {this.state.data.map((item, index) => (
              <Col lg="3" key={index}>
                <Explore2Item
                  title={item.title}
                  net={item.net}
                  owner={item.owner}
                  price={item.price}
                  priceItem={item.priceItem}
                  bidding={item.bidding}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Explore2Comp;
