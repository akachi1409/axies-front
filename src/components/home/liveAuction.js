import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import Explore3Comp from "../explore/explore3/explore3Comp";
// import Button1 from "../../basic/button/button1";
// import Button2 from "../../basic/button/button2";
import AuctionItem from "../auction/auctionItem";
import "./liveAuction.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import BgImg from "../../assets/header/bg.png"
import RocketImg from "../../assets/header/rocket.png";
function LiveAuctoion() {
  const navigate = useNavigate();

  const onExplore = () => {
    navigate("/explore");
  };

  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  // const [firstLoad, setFirstLoad] = useState(true);
  const [flag, setFlag] = useState(true);
  const [items, setItems] = useState([]);
  const [prices, setPrices] = useState([]);

  const getAssetByAddressAndId = (url) => {
    return new Promise((resolve) => {
      return resolve(axios.get(url));
    });
  };
  const getAsset = (url) => {
    return getAssetByAddressAndId(url);
  };

  const getPriceResolve = (address, id) => {
    return new Promise((resolve) => {
      return resolve(
        blockchain.smartContract.methods.nftContractAuctions(address, id).call()
      );
    });
  };
  const getPrice = (address, id) => {
    return getPriceResolve(address, id);
  };

  const getData = async () => {
    const length = data.auctionAddress.length;
    let tempItems = items;
    let tempPrices = prices;
    for (let i = 0; i < length; i++) {
      const url =
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=" +
        data.auctionAddress[i] +
        "&token_ids=" +
        data.auctionId[i] +
        "&offset=0&limit=200";
      let nft = await getAsset(url);
      let price = await getPrice(data.auctionAddress[i], data.auctionId[i]);
      tempPrices.push(
        blockchain.web3.utils.fromWei(price.buyNowPrice, "ether")
      );
      console.log(nft);
      tempItems.push(nft.data.assets[0]);
    }
    setPrices(tempPrices);
    setItems(tempItems);
    setFlag(!flag);
  };

  useEffect(() => {
    getData();
  }, [data.auctionAddress]);// eslint-disable-line react-hooks/exhaustive-deps
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
        <br />
        <Row>
          {blockchain.account === null ? (
            <h2 className="liveAuction-title">
              You have to connect your wallet to check live auction.
            </h2>
          ) : (
            <Row>
              {items.map(
                (item, index) => (
                  <Col lg="3" key={index}>
                    <AuctionItem
                      title={item.name}
                      net={item.net}
                      owner={
                        item.owner.address.length > 18
                          ? item.owner.address.substring(0, 12) + "..."
                          : item.owner.address
                      }
                      image={item.image_url}
                      price={prices[index]}
                    />
                  </Col>
                )
                // }
              )}
            </Row>
          )}
        </Row>
      </Container>
      {/* <Explore3Comp /> */}
      {/* <Container>
        <Row>
          <Col lg="6" style={{ textAlign: "left" }}>
            <h2 className="liveAuction-title">Today's Picks</h2>
          </Col>
          <Col lg="6" style={{ textAlign: "right", margin: "auto" }}>
            <p className="liveAuction-text">Explore More</p>
          </Col>
        </Row>
        
        <Row>
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
          </Row>
        <Button2 title="Load More" />
      </Container> */}
    </div>
  );
}
export default LiveAuctoion;
