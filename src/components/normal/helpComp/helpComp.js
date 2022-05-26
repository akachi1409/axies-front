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
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          img: TeleImg,
        },
        {
          title: "Creating",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          img: FolderImg,
        },
        {
            title: "Buying",
            text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt",
            img: BuyImg
        },
        {
            title: "Selling",
            text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt",
            img: SellImg
        },
        {
            title: "Partners",
            text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt",
            img: PartnerImg
        },
        {
            title: "Developers",
            text: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt",
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
          <Row>
            <h2 className="help-title">How can We Help You?</h2>
          </Row>
          <Row>
            <p className="help-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati
              <br /> dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
          </Row>
          <Row>
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
          </Row>
          <br />
          <Row style={{justifyContent:"center"}}>
            {data.map((item, index) => (
              <Col lg="3" key={index}>
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
