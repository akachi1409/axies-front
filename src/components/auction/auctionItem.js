import "./auctionItem.css";
import { Row, Col } from "react-bootstrap";

// import HeartImg from "../../assets/explore/heart.png";
import UserImg from "../../assets/explore/user.png";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AuctionItem(props) {

  const notify = (msg) => toast(msg);
  let navigate = useNavigate();
  const onNavigate = () =>{
      if (blockchain.account === props.ownerAddress) {
        notify("You are the owner of this NFT, can not bid on this item");
        return;
      }
      navigate("/auction_item/"+props.contract + "/" + props.tokenId)
  }

  const blockchain = useSelector((state) => state.blockchain);

  return (
    <div className="auctionItem-layout" onClick = {() => onNavigate()}>
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
      <ToastContainer />
    </div>
  );
}
export default AuctionItem;
