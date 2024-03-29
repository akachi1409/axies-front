import "./auctionItem.css";
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState} from "react"
// import HeartImg from "../../assets/explore/heart.png";
// import UserImg from "../../assets/explore/user.png";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function AuctionItem(props) {
  const [firstLoad, setFirstLoad] = useState(true);
  const [image, setImage] = useState(null);
  const notify = (msg) => toast(msg);
  let navigate = useNavigate();
  const onNavigate = () =>{
      if (blockchain.account.toUpperCase() === props.seller.toUpperCase()) {
        notify("You are the seller of this NFT, can not bid on this item");
        return;
      }
      navigate("/bid_item/"+props.contract + "/" + props.tokenId)
  }

  const blockchain = useSelector((state) => state.blockchain);

  useEffect(() =>{
    async function getData() {
      console.log("props", props)
      
      var temp = await axios.get(props.image);
      // console.log('temp', temp)
      setImage(temp.data);
      setFirstLoad(false)
    }
    if (firstLoad)
      getData();
    /* eslint-disable */
  }, [firstLoad])

  return (
    <div className="auctionItem-layout" onClick = {() => onNavigate()}>
      <Row>
        <div className="auctionItem-box">
          <img src={image} alt="" className="aucitonItem-img"></img>
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
        <Col lg="9" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="auctionItem-owner-title">seller</h4>
          {
          props.seller === undefined ?
          (
            <p className="auctionItem-owner"></p>
          )
          :
          (
            <p className="auctionItem-owner">{props.seller.substring(0, 18)+ "..."}</p>
          ) 
          }
          
        </Col>
        <Col lg="3" style={{ textAlign: "right" }}>
          <h4 className="auctionItem-owner-title">Floor Price</h4>
          <p className="auctionItem-owner">{props.price}</p>
        </Col>
      </Row>

      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="7" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="auctionItem-owner-title">Highest Bidder</h4>
          <p className="auctionItem-owner">{props.highestBidder.substring(0, 18) + "..."}</p>
        </Col>
        <Col lg="5" style={{ textAlign: "right" }}>
          <h4 className="auctionItem-owner-title">Highest Bid</h4>
          <p className="auctionItem-owner">{props.highestBid}</p>
        </Col>
      </Row>
      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="5" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="auctionItem-owner-title">Auction Ends In</h4>
          {
            props.auctionEnd === "0" ? (
              <p className="auctionItem-owner">None</p>
            ):(
              <p className="auctionItem-owner">{new Date(1000*props.auctionEnd).toLocaleDateString("en-us")}</p>
            )
          }
          
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
export default AuctionItem;
