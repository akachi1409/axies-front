import "./explore1Item.css";
import { Row, Col } from "react-bootstrap";
import React, {useState, useEffect} from "react"

import { useNavigate } from "react-router-dom";
import axios from "axios";
function Explore1Item(props) {
  const [firstLoad, setFirstLoad] = useState(true);
  const [image, setImage] = useState(null);
  let navigate = useNavigate();
  const onNavigate = () =>{
    if (props.navable)
      navigate("/explore_item/"+props.contract + "/" + props.tokenId)
  }

  useEffect(() =>{
    async function getData() {
      if (props.image === undefined || props.image === null){
        return;
      }
      var temp = await axios.get(props.image);
      setImage(temp.data);
      setFirstLoad(false)
    }
    if (firstLoad)
      getData();
    /* eslint-disable */
  }, [props.image])
  return (
    <div className="explore1Item-layout" onClick={()=>onNavigate()}>
      <Row>
        <div className="explore1Item-img-layout">
            <img src={image} alt="" className="explore1Item-img"></img>

        </div>
      </Row>

      <Row style={{ marginTop: "1em", alignItems: "left" }}>
        <h1 className="explore1Item-title">{props.title}</h1>
      </Row>
      <Row>
        <p className="explore1Item-text">
          {props.description}
        </p>
      </Row>
      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="9" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="explore1Item-owner-title">seller</h4>
          {
          props.seller === undefined ?
          (
            <p className="explore1Item-owner"></p>
          )
          :
          (
            <p className="explore1Item-owner">{props.seller.substring(0, 18)+ "..."}</p>
          ) 
          }
          
        </Col>
        <Col lg="3" style={{ textAlign: "right" }}>
          <h4 className="explore1Item-owner-title">Floor Price</h4>
          <p className="explore1Item-owner">{props.price}</p>
        </Col>
      </Row>
      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="7" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="explore1Item-owner-title">Highest Bidder</h4>
          <p className="explore1Item-owner">{props.highestBidder.substring(0, 18) + "..."}</p>
        </Col>
        <Col lg="5" style={{ textAlign: "right" }}>
          <h4 className="explore1Item-owner-title">Highest Bid</h4>
          <p className="explore1Item-owner">{props.highestBid}</p>
        </Col>
      </Row>
      <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="5" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="explore1Item-owner-title">Auction Ends In</h4>
          {
            props.auctionEnd === "0" ? (
              <p className="explore1Item-owner">None</p>
            ):(
              <p className="explore1Item-owner">{new Date(1000*props.auctionEnd).toLocaleDateString("en-us")}</p>
            )
          }
        </Col>
      </Row>
    </div>
  );
}
export default Explore1Item;
