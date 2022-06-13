import "./auctionItem.css";
import { Row, Col } from "react-bootstrap";

// import HeartImg from "../../assets/explore/heart.png";
import UserImg from "../../assets/explore/user.png";

function AuctionItem(props) {
  return (
    <div className="auctionItem-layout">
      <Row>
        <div className="auctionItem-box">
          <img src={props.image} alt="" className="aucitonItem-img"></img>
          {/* <div className="auctionItem-like">
            <img src={HeartImg} alt="" />
            &nbsp; 100
          </div> */}
        </div>
      </Row>

      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="9">
          <h1 className="auctionItem-title">{props.title}</h1>
        </Col>
        <Col lg="3">
          <div className="auctionItem-net">{props.net}</div>
        </Col>
      </Row>

      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="2">
          <img src={UserImg} alt="" />
        </Col>
        <Col lg="7" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="auctionItem-owner-title">Owned By</h4>
          <p className="auctionItem-owner">{props.owner}</p>
        </Col>
        <Col lg="3" style={{ textAlign: "right" }}>
          <h4 className="auctionItem-owner-title">AkachiToken</h4>
          <p className="auctionItem-owner">{props.price}</p>
        </Col>
      </Row>
    </div>
  );
}
export default AuctionItem;
