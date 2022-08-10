import "./auctionComp.css";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [highestPrices, setHighestPrices] = useState([])
  const [highestBidders, setHighestBidder] = useState([])
  const [auctionEnds, setAuctionEnds] = useState([])
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  let navigate = useNavigate();

  const notify = (msg) => toast(msg);

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
  useEffect(() => {
    if (firstLoad) {
      if (blockchain.account === null) {
        notify("You should connect wallet.");
        navigate("/");
      }
      setFirstLoad(false);
    }
    // checkAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);

  useEffect(() => {
    getData();
  }, [data.auctionAddress]); // eslint-disable-line react-hooks/exhaustive-deps

  const getData = async () => {
    setLoading(true);
    try {
      const length = data.auctionAddress.length;
      let tempItems = [];
      let tempPrices = [];
      let tempHighestPrices = [];
      let tempHighestBidders = [];
      let tempSellers = [];
      let tempEnds = []
      for (let i = 0; i < length; i++) {
        // console.log("--", data.auctionId[i])
        const url = await getURL(data.auctionId[i])
        // console.log("--", url)
        const result = await getNFTs(url.split("https://gateway.pinata.cloud/ipfs/")[1])
        // console.log("result", result)
        let price = await getPrice(data.auctionAddress[i], data.auctionId[i]);
        tempPrices.push(
          blockchain.web3.utils.fromWei(price.minPrice, "ether")
        );
        tempHighestPrices.push(
          blockchain.web3.utils.fromWei(price.nftHighestBid, "ether")
        )
        tempHighestBidders.push(
          price.nftHighestBidder
        )
        tempSellers.push(
          price.nftSeller
        )
        tempEnds.push(
          price.auctionEnd
        )

        // console.log(nft);
        tempItems.push({ 
          "image": result.data.image,
          "title": result.data.name,
          "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
          "tokenId": data.auctionId[i],
          "akachiNFT": "true"
        });
        // console.log("---", tempItems);
      }
      setHighestBidder(tempHighestBidders)
      setHighestPrices(tempHighestPrices)
      setPrices(tempPrices);
      setItems(tempItems);
      setSellers(tempSellers)
      setAuctionEnds(tempEnds)
      setFlag(!flag);
      setLoading(false);
    } catch (err) {
      console.log(err)
      setError(true);
      setLoading(false);
    }
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
          </div>
        )}
        <Row>
          {items.map(
            (item, index) => (
              <Col lg="3" key={index}>
                <AuctionItem
                  title={item.title}
                  net={item.net}
                  image={item.image}
                  price={prices[index]}
                  highestBid={highestPrices[index]}
                  highestBidder={highestBidders[index]}
                  seller = {sellers[index]}
                  auctionEnd = {auctionEnds[index]}
                  tokenId= {item.tokenId} 
                  contract = {item.contract}
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
            Something is not working well, please refresh the page and reconnect your wallet.
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick = {() => onReload()}>Understood</Button>
        </Modal.Footer>
        </Modal>
        <ToastContainer />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default AuctionComp;
