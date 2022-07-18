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
import ReactLoading from "react-loading";
import { Modal, Button } from "react-bootstrap"
// import RocketImg from "../../assets/header/arrow1.png";
// import ItemImg from "../../assets/item.png";
import CatenImg from "../../assets/rocket.svg";
import FatherSonImg from "../../assets/fatherson.png"
// import AuctionBorderImg from "../../assets/auctionBorder.png"

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
  const [firstLoad, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const getURL = (i) =>{
    return getURLPromise(i);
  }

  const getURLPromise = (i) =>{
    return new Promise ((resolve) =>{
      return resolve(blockchain.akachiNFT.methods._tokenURI(i).call())
    })
  }
  const getNFTs = (url) =>{
    return getNFTPromise(url)
  }

  const getNFTPromise = (url) =>{
    return new Promise ((resolve) => {
      return resolve(
        axios.get(url)
      )
    })
  }

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
    setLoading(true);
    try {
      const length = data.auctionAddress.length;
      let tempItems = [];
      let tempPrices = [];
      for (let i = 0; i < length; i++) {
        const url = await getURL(data.auctionId[i])
        const result = await getNFTs(url.split("https://gateway.pinata.cloud/ipfs/")[1])
        let price = await getPrice(data.auctionAddress[i], data.auctionId[i]);
        tempPrices.push(
          blockchain.web3.utils.fromWei(price.buyNowPrice, "ether")
        );
        tempItems.push({ 
          "image": result.data.image,
          "title": result.data.name,
          "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
          "tokenId": data.auctionId[i],
          "akachiNFT": "true"
        });
        console.log("---", tempItems);
      }
      setPrices(tempPrices);
      setItems(tempItems);
      setFlag(!flag);
      setLoading(false);
    } catch (err) {
      console.log(err)
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (firstLoad) {
      if (blockchain.account !== null) {
        getData()
      }
      setFirstLoad(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);
  
  const onReload = () =>{
    document.location.reload(true);
  }

  return (
    <div className="liveAuction-layout">
      <div className="liveAuction-layout-header">
        <Container className="liveAuction-layout-container">
          <Row>
            <Col lg="8">
              {/* <h1 className="liveAuction-layout-title-white">
                Discorver, find,
              </h1> */}
              <h1 className="liveAuction-layout-text">
              Your Legacy on the Blockchain
              <img src={CatenImg} alt= "" className="liveAuction-layout-caten"/>
              </h1>
              {/* <h1 className="liveAuction-layout-title-white">Monster NFTs</h1> */}
              <p className="liveAuction-layout-title-violet">
              Future Forward <br/> Financial Fathers
              </p>
              <div className="explore-box">
                <button
                  className="liveAuction-button1-layout"
                  onClick={() => onExplore()}
                >
                  <span className="button1-title">
                    Explore Now
                    {/* <img alt="" src={RocketImg} className="button1-img" /> */}
                  </span>
                </button>
              </div>
              
            </Col>
            <Col lg="4">
              <img src={FatherSonImg} alt="" className="liveAuction-item-image" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="liveAuction-title-container">
        <div className="liveAuction-bar-layout">
            <h2 className="liveAuction-title">Live Auction</h2>
            <p className="liveAuction-title-text">All auctions offer a fair opportunity to all would-be bids. Collectors can <br/>know that their investment will be protected if the reserve price fulfills.</p>
            {/* <div className="bottomBar"></div> */}
        </div>
        <br />
        <Row> 
          {blockchain.account === null ? (
            <h2 className="check-liveAuction">
              ! You have to connect your wallet to check live auction 
            </h2>
          ) : loading ? (
            <div className="auctionComp-loading">
              <ReactLoading type="bars" color="#fff" />
            </div>
          ) : (
            <div>
              <h2 className="liveAuction-description">
                All auctions offer a fair opportunity to all would-be bids. Collectors can know that their investment will be protected if the reserve price fulfills.
              </h2>
              <Row>
              {items.map(
                (item, index) => (
                  <Col lg="3" key={index}>
                    <AuctionItem
                      title={item.title}
                      net={item.net}
                      // owner={item.owner}
                      image={item.image}
                      price={prices[index]}
                      // ownerAddress = {item.owner.address}
                      tokenId={item.tokenId}
                      contract={item.contract}
                    />
                  </Col>
                )
                // }
              )}
            </Row>
            </div>
            
          )}
        </Row>
      </Container>
      <Modal show={error} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Something is not working well, please refresh the page and reconnect your wallet.
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick = {() => onReload()}>Understood</Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
}
export default LiveAuctoion;
