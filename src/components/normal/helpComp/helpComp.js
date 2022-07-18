import "./helpComp.css";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeleImg from "../../../assets/help/telegram.png";
import FolderImg from "../../../assets/help/folder.png";
import HelpItem from "./helpItem";
import BuyImg from "../../../assets/help/buying.png"; 
import SellImg from "../../../assets/help/selling.png"; 
import PartnerImg from "../../../assets/help/partner.png";
import DeveloperImg from "../../../assets/help/developers.png";
class HelpComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Getting Started",
          text: "Learn how to create an account, set up your wallet, and what you can do on CATENA",
          img: TeleImg,
        },
        {
          title: "Creating",
          text: "Learn how to create your first NFT and how to create NFT collections",
          img: FolderImg,
        },
        {
            title: "Buying",
            text: "Learn how to purchase your first NFT, understand gas fees, and see the gas fee on CATENA",
            img: BuyImg
        },
        {
            title: "Selling",
            text: "Learn how list your NFTs for sale and understand the different ways to list your NFTs",
            img: SellImg
        },
        {
            title: "Partners",
            text: "Learn how you can partner with us to showcase your NFT drops",
            img: PartnerImg
        },
        {
            title: "Developers",
            text: "Learn how you can develop with OpenSea Platoform",
            img: DeveloperImg
        }
      ],
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className="help-layout">
        <Container>
          <div className="help-title-layout">
            <h2 className="help-title">How can We Help You?</h2>
            <div className="bottomBar"></div>
          </div>
          {/* <Row>
            <p className="help-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati
              <br /> dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
          </Row> */}
          {/* <Row>
            <input
              className="help-search-input"
              type="text"
              placeholder="Type your question here"
            />
          </Row>
          <br />
          <Row>
            <p className="help-text">
              Or choose a categories to quickly find the help you need
            </p>
          </Row> */}
          <br />
          <Row style={{justifyContent:"center"}}>
            {data.map((item, index) => (
              <Col lg="4" key={index}>
                <HelpItem Img={item.img} title={item.title} text={item.text} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default HelpComp;
