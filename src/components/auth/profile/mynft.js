import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Explore1Item from "../../explore/explore1/explore1Item";
import axios from "axios";

import "./mynft.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Mynft() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [data, setData] = useState([]);
  const blockchain = useSelector((state) => state.blockchain);
  let navigate = useNavigate();
  useEffect(() => {
    if (firstLoad) {
      console.log(blockchain);
      if (blockchain.account === null) {
        navigate("/");
      }
      const url =
        "https://testnets-api.opensea.io/api/v1/assets?owner=" +
        blockchain.account +
        "&offset=0&limit=200";
      axios.get(url).then((res) => {
        console.log(res);
        setData(res.data.assets)  
      });
      setFirstLoad(false);
    }
  }, [firstLoad, blockchain, navigate]);
  return (
    <div className="mynft-layout">
      <Container>
        <Row>
          <h2 className="mynft-title">My NFT</h2>
          <p className="mynft-text">You can view your NFTs here.</p>
        </Row>
        <Row>
            {
                data.length === 0&&(
                    <p className="mynft-empty">You have NO NFT at all.</p>
                )
            }
          {data.map((item, index) => {
            // console.log("item: ", item);
            // var price = item.token.floorAskPrice == null ? "TBD" : item.token.floorAskPrice;
            var owner =
            blockchain.account.length > 12
                ? blockchain.account.substring(0, 12) + "..."
                : blockchain.account;
            return (
              <Col lg="3" key={index}>
                <Explore1Item
                  image={item.image_url}
                  title={item.name}
                  // net={item.net}
                  owner={owner}
                  contract = {item.asset_contract.address}
                  tokenId = {item.token_id}
                  // price={price}
                  // priceItem = {item.priceItem}
                //   bidding={item.bidding}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default Mynft;
