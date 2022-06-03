import "./explore3Comp.css";

import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
// import { Carousel }  "react-responsive-carousel"
// import Explore2Item from "./explore2Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Explore1Item from "../explore1/explore1Item";
class Explore3Comp extends Component {
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
          bidding: true
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
    const setting = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="explore3Comp-layout">
        <Container>
          <Row>
            <Slider {...setting}>
              {this.state.data.map((item, index) => (
                <div key={index}>
                  <Explore1Item
                    title={item.title}
                    net={item.net}
                    owner={item.owner}
                    price={item.price}
                    priceItem={item.priceItem}
                    bidding={item.bidding}
                  />
                </div>
              ))}
            </Slider>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Explore3Comp;
