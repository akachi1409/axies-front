import "./auctionComp.css";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import Button2 from "../../basic/button/button2";
import AuctionItem from "./auctionItem";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import { Modal, Button } from "react-bootstrap"

function AuctionComp() {
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  const [firstLoad, setFirstLoad] = useState(true);
  const [flag, setFlag] = useState(true);
  const [items, setItems] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  let navigate = useNavigate();

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
  useEffect(() => {
    if (firstLoad) {
      if (blockchain.account === null) {
        navigate("/");
      }
      setFirstLoad(false);
    }
  }, [firstLoad, blockchain, navigate]);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const getSleep = () => {
    return sleep(4000);
  };
  useEffect(() => {
    getData();
  }, [data.auctionAddress]); // eslint-disable-line react-hooks/exhaustive-deps

  const getData = async () => {
    setLoading(true);
    try {
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
        await getSleep();
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
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  const onReload = () =>{
    document.location.reload(true);
  }

  return (
    <div className="auctionComp-layout">
      <Container>
        <h2 className="auctionComp-title">Live Auctions</h2>
        {loading && (
          <div className="auctionComp-loading">
            <ReactLoading type="bars" color="#fff" />
            {/* <h2 className="createAuction-loading-title">Loading Live Auctions</h2> */}
          </div>
        )}
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
        {/* <Button2 title="Load More" /> */}
        <Modal show={error} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            API is not working well at the moment, please refresh the page and reconnect your wallet.
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick = {() => onReload()}>Understood</Button>
        </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default AuctionComp;
