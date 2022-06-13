import "./auctionComp.css";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button2 from "../../basic/button/button2";
import AuctionItem from "./auctionItem";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuctionComp() {
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  const [firstLoad, setFirstLoad] = useState(true);
  const [flag, setFlag] = useState(true);
  const [items, setItems] = useState([]);
  const [prices, setPrices] = useState([])
  let navigate = useNavigate();

  const getAssetByAddressAndId = (url) => {
    return new Promise((resolve) => {
      return resolve(axios.get(url));
    });
  };

  const getAsset = (url) => {
    return getAssetByAddressAndId(url);
  };

  const getPriceResolve = (address, id) =>{
    return new Promise((resolve) => {
        return resolve(
            blockchain.smartContract.methods.nftContractAuctions(address, id)
            .call()
        )
    })
  }
  const getPrice = (address, id) =>{
    return getPriceResolve(address, id)
  }
  useEffect(() => {
    if (firstLoad) {
      if (blockchain.account === null) {
        navigate("/");
      }
      setFirstLoad(false);
    }
  }, [firstLoad, blockchain, navigate]);

  useEffect(() => {
    getData();
  }, [data.auctionAddress]);// eslint-disable-line react-hooks/exhaustive-deps

  const getData = async () => {
    const length = data.auctionAddress.length;
    let tempItems = [];
    let tempPrices = [];
    for (let i = 0; i < length; i++) {
      const url =
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=" +
        data.auctionAddress[i] +
        "&token_ids=" +
        data.auctionId[i] +
        "&offset=0&limit=200";
      let nft = await getAsset(url);
      let price = await getPrice(data.auctionAddress[i], data.auctionId[i])
      tempPrices.push(blockchain.web3.utils.fromWei(price.buyNowPrice, "ether") )
      console.log(nft);
      tempItems.push(nft.data.assets[0]);
    }
    setPrices(tempPrices)
    setItems(tempItems);
    setFlag(!flag);
  };

  return (
    <div className="auctionComp-layout">
      <Container>
        <h2 className="auctionComp-title">Live Auctions</h2>
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
                  image = {item.image_url}
                  price = {prices[index]}
                />
              </Col>
            )
            // }
          )}
        </Row>
        <Button2 title="Load More" />
      </Container>
    </div>
  );
}

export default AuctionComp;
