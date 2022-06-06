import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Explore3Comp from "../explore/explore3/explore3Comp";
// import Button1 from "../../basic/button/button1";
import Button2 from "../../basic/button/button2";
import "./liveAuction.css";
import { useNavigate } from "react-router-dom";
// import BgImg from "../../assets/header/bg.png"
import RocketImg from "../../assets/header/rocket.png";
function LiveAuctoion() {
  const navigate = useNavigate();

  const onExplore = () => {
    navigate("/explore")
  };

  return (
    <div className="liveAuction-layout">
      <div className="liveAuction-layout-header">
        <Container style={{ marginTop: "300px" }}>
          <h1 className="liveAuction-layout-title-white">Discorver, find,</h1>
          <h1 className="liveAuction-layout-title-violet">
            Sell extraordinary
          </h1>
          <h1 className="liveAuction-layout-title-white">Monster NFTs</h1>
          <p className="liveAuction-layout-text">
            Marketplace for monster character cllections non fungible token NFTs
          </p>
          <button className="button1-layout" onClick={() => onExplore()}>
            <span className="button1-title">
              <img alt="" src={RocketImg} className="button1-img" />
              Explore
            </span>
          </button>
          {/* <button className="button2-layout">
              <span className="button2-title"><img alt="" src={RocketImg} className="button2-img"/>Google</span>
            </button> */}
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg="6" style={{ textAlign: "left" }}>
            <h2 className="liveAuction-title">Live Auction</h2>
          </Col>
          <Col lg="6" style={{ textAlign: "right", margin: "auto" }}>
            <p className="liveAuction-text">Explore More</p>
          </Col>
        </Row>
      </Container>
      <Explore3Comp />
      <Container>
        <Row>
          <Col lg="6" style={{ textAlign: "left" }}>
            <h2 className="liveAuction-title">Today's Picks</h2>
          </Col>
          <Col lg="6" style={{ textAlign: "right", margin: "auto" }}>
            <p className="liveAuction-text">Explore More</p>
          </Col>
        </Row>
        {/* <Row>
            {this.state.data.map((item, index) => (
              <Col lg="3" key={index}>
                <Explore1Item
                  title={item.title}
                  net={item.net}
                  owner={item.owner}
                  price={item.price}
                  priceItem={item.priceItem}
                  bidding={item.bidding}
                />
              </Col>
            ))}
          </Row> */}
        <Button2 title="Load More" />
      </Container>
    </div>
  );
}
export default LiveAuctoion;
