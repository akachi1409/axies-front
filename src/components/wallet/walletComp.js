import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import WalletItem from "./walletItem"
import "./walletComp.css";
import MetaImg from "../../assets/wallet/metamask.png"
import CoinImg from "../../assets/wallet/coinbase.png"
class WalletComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[
                {
                    img: MetaImg,
                    wallet: "Meta Mask",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                },
                {
                    img: CoinImg,
                    wallet: "Coinbase Wallet",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
            ]
        }
    }
  render() {
    return (
      <div className="walletComp-layout">
        <Container>
          <Row>
            <h2 className="walletComp-title">Connect Wallet</h2>
          </Row>
          <Row>
            <p className="walletComp-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.</p>
          </Row>
          <Row>
              {
                  this.state.data.map((item, index) => (
                      <Col lg = "6" key= {index}>
                          <WalletItem 
                          img = {item.img}
                        wallet = {item.wallet}
                        text = {item.text}
                        />
                      </Col>
                    
                  ))
              }
          </Row>
        </Container>
      </div>
    );
  }
}

export default WalletComp;
