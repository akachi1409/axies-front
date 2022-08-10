import "./explore4Item.css";
import { Row } from "react-bootstrap";
import React, {useState, useEffect} from "react"

import { useNavigate } from "react-router-dom";
import axios from "axios";
function Explore4Item(props) {
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
    <div className="explore4Item-layout" onClick={()=>onNavigate()}>
      <Row>
        <div className="explore4Item-img-layout">
            <img src={image} alt="" className="explore4Item-img"></img>
        </div>
      </Row>

      <Row style={{ marginTop: "1em", alignItems: "left" }}>
        <h1 className="explore4Item-title">{props.title}</h1>
      </Row>
      <Row>
        <p className="explore4Item-text">
          {props.description}
        </p>
      </Row>
      {/* <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="9" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="explore4Item-owner-title">seller</h4>
          {
          props.seller === undefined ?
          (
            <p className="explore4Item-owner"></p>
          )
          :
          (
            <p className="explore4Item-owner">{props.seller.substring(0, 18)+ "..."}</p>
          ) 
          }
          
        </Col>
        <Col lg="3" style={{ textAlign: "right" }}>
          <h4 className="explore4Item-owner-title">Floor Price</h4>
          <p className="explore4Item-owner">{props.price}</p>
        </Col>
      </Row> */}
      {/* <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="7" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="explore4Item-owner-title">Highest Bidder</h4>
          <p className="explore4Item-owner">{props.highestBidder.substring(0, 18) + "..."}</p>
        </Col>
        <Col lg="5" style={{ textAlign: "right" }}>
          <h4 className="explore4Item-owner-title">Highest Bid</h4>
          <p className="explore4Item-owner">{props.highestBid}</p>
        </Col>
      </Row> */}
      {/* <Row style={{ marginTop: "1em", alignItems: "center" }}>
        <Col lg="5" style={{ paddingLeft: "10px", textAlign: "left" }}>
          <h4 className="explore4Item-owner-title">Auction Ends In</h4>
          {
            props.auctionEnd === "0" ? (
              <p className="explore4Item-owner">None</p>
            ):(
              <p className="explore4Item-owner">{new Date(1000*props.auctionEnd).toLocaleDateString("en-us")}</p>
            )
          }
        </Col>
      </Row> */}
    </div>
  );
}
export default Explore4Item;
