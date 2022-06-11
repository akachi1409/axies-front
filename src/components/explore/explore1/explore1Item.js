import "./explore1Item.css";
import { Row, Col } from "react-bootstrap";

// import HeartImg from "../../../assets/explore/heart.png";
import UserImg from "../../../assets/explore/user.png";
import BagImg from "../../../assets/explore/bag.png";
import ReloadImg from "../../../assets/explore/reload.png";

function Explore1Item(props) {
  return (
    <div className="explore1Item-layout">
      <Row>
        <div className="explore1Item-img-layout">
          <img src={props.image} alt="" className="explore1Item-img"></img>
        </div>
      </Row>

      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        {/* <Col lg="9"> */}
        <h1 className="explore1Item-title">{props.title}</h1>
        {/* </Col> */}
        {/* <Col lg="3">
          <div className="explore1Item-net">{props.net}</div>
        </Col> */}
      </Row>

      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="2">
          <img src={UserImg} alt="" />
        </Col>
        <Col lg="7" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="explore1Item-owner-title">Owned By</h4>
          <p className="explore1Item-owner">{props.owner}</p>
        </Col>
        <Col lg="3" style={{ textAlign: "right" }}>
          <h4 className="explore1Item-owner-title">Floor Price</h4>
          <p className="explore1Item-owner">{props.price}</p>
        </Col>
      </Row>
      {props.bidding && (
        <Row style={{ marginTop: "1em" }}>
          <Col lg="6">
            <div className="explore1Item-bid">
              <img src={BagImg} alt="" />
              &nbsp; Place bid
            </div>
          </Col>
          <Col lg="6">
            <div className="explore1Item-refresh">
              <img src={ReloadImg} alt="" />
              &nbsp; View History
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}
export default Explore1Item;
