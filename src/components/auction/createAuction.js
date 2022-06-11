import "./createAuction.css";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Explore1Item from "../explore/explore1/explore1Item";

import Input1 from "../../basic/button/input1";
// import ClockImg from "../../assets/item/clock.png";
import TagImg from "../../assets/item/tag.png";
// import PeopleImg from "../../assets/item/people.png";

import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateAuction(props) {
  const [data, setData] = useState([]);
  const [owner, setOwner ] = useState("")
  let navigate = useNavigate();
  const blockchain = useSelector((state) => state.blockchain);
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    if (firstLoad) {
      // console.log(props);
      if (blockchain.account === null) {
        navigate("/");
      }
      const url =
        "https://testnets-api.opensea.io/api/v1/assets?token_ids="+props.id + "&asset_contract_address=" +
        props.contract +
        "&offset=0&limit=200";
      axios.get(url).then((res) => {
        console.log(res);
        setData(res.data.assets[0])  
        if (res.data.assets[0].owner.address.length> 15)
          setOwner(res.data.assets[0].owner.address.substring(0, 12) + "...")
        else
         setOwner(res.data.assets[0].owner.address)
      });
      setFirstLoad(false);
    }
  }, [firstLoad, blockchain, navigate, props.contract, props.id]);
  return (
    <div className="createAuction-layout">
      <Container>
        <Row>
          <Col lg="4">
            <h2 className="createAuction-title">Preview item</h2>
            <Explore1Item
              title={data.name}
              image = {data.image_url}
              net="BSC"
              owner={owner}
              // .length > 12 ? 
              //   data.creator.address.substring(0, 10) + "..." :
              //    data.creator.address}
              // price="Current Bid"
              // priceItem="4.89ETH"
              bidding={false}
            />
          </Col>
          <Col lg="8">
            <h2 className="createAuction-title">Select method</h2>
            <Row>
              <Col lg="8">
                <button className="createAuction-method selected">
                  <img src={TagImg} alt="" className="button-img" />
                  Fixed Price
                </button>
              </Col>
              {/* <Col lg="4">
                <button className="createAuction-method">
                  <img src={ClockImg} alt="" className="button-img" />
                  Fixed Price
                </button>
              </Col>
              <Col lg="4">
                <button className="createAuction-method">
                  <img src={PeopleImg} alt="" className="button-img" />
                  Fixed Price
                </button>
              </Col> */}
            </Row>
            <h2 className="createAuction-title">Price</h2>
            <Input1 margin="1em" text="Enter price for one item (ETH)" />
            {/* <h2 className="createAuction-title">Title</h2>
            <Input1 margin="1em" text="Item Name" />
            <h2 className="createAuction-title">Description</h2>
            <textarea
              className="blogDetails-input1"
              type="text"
              placeholder='e.g "This is very limited item"'
            />
            <Row>
              <Col lg="8">
                <h2 className="createAuction-title">External Link</h2>
                <input
                  placeholder="https://yoursite.com"
                  className="createAuction-input"
                />
              </Col>

              <Col lg="4">
                <h2 className="createAuction-title">Collection</h2>
                <select className="explore1Comp-select">
                  <option>All Artworks</option>
                  <option>Music</option>
                  <option>Domain Names</option>
                  <option>Virtual World</option>
                  <option>Trading Cards</option>
                  <option>Sports</option>
                  <option>Utility</option>
                </select>
              </Col>
            </Row> */}
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <button className="createAuction-create-btn">Start Auction</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CreateAuction;
