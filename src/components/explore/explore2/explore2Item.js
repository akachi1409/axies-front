import "./explore2Item.css";
import { Row, Col } from "react-bootstrap";

import HeartImg from "../../../assets/explore/heart.png";
import UserImg from "../../../assets/explore/user.png";
import ReloadImg from "../../../assets/explore/reload.png";

function Explore2Item(props) {
  return (
    <div className="explore2Item-layout">
      <Row>
        <div className="explore2Item-box">
          <div className="explore2Item-like">
            <img src={HeartImg} alt="" />
            &nbsp; 100
          </div>
        </div>
      </Row>
      <h1 className="explore2Item-title">{props.title}</h1>

      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="2">
          <img src={UserImg} alt="" />
        </Col>
        <Col lg="7" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="explore2Item-owner-title">Owned By</h4>
          <p className="explore2Item-owner">{props.owner}</p>
        </Col>
        <Col lg="3" >
          <div className="explore2Item-net">{props.net}</div>
        </Col>
      </Row>
      {props.bidding && (
        <Row style={{ marginTop: "1em" }}>
          <Col lg="6">
            <div className="explore2Item-bid">
              <h4 className="explore2Item-owner-title">{props.priceItem}</h4>
              <p className="explore2Item-owner">{props.price}</p>
            </div>
          </Col>
          <Col lg="6">
            <div className="explore2Item-refresh">
              <img src={ReloadImg} alt="" />
              &nbsp; View History
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}
export default Explore2Item;
