import "./bidItem.css";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Explore1Item from "../explore/explore1/explore1Item";

// import Input1 from "../../basic/button/input1";
// import ClockImg from "../../assets/item/clock.png";
import TagImg from "../../assets/item/tag.png";
// import PeopleImg from "../../assets/item/people.png";

import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Web3EthContract from "web3-eth-contract";
import Input1 from "../../basic/button/input1";
import AkachiToken from "../../contracts/AkachiToken.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import EliteChess from "../../contracts/EliteChess.json";
function BidItem(props) {
  const [data, setData] = useState([]);
  // const [owner, setOwner] = useState("");
  const [buyNow, setBuyNow] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [bidPrice, setBidPrice] = useState(0);
  const [auctionEnd, setAuctionEnd] = useState(0)
  const [highestPrice, setHighestPrice] = useState(0);
  const [highestBidder, setHighestBidder] = useState("");
  const [seller, setSeller] = useState("")

  const notify = (msg) => toast(msg);

  let navigate = useNavigate();
  // const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [firstLoad, setFirstLoad] = useState(true);

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
  
  useEffect(() => {
    async function getData(){
      if (firstLoad) {
        // console.log(props);
        if (blockchain.account === null) {
          navigate("/");
        }
        const url = await getURL(props.id)
        const result = await getNFTs(url.split("https://gateway.pinata.cloud/ipfs/")[1])
        console.log("result:", result.data, );
        var data = result.data;
        setData({ 
          "image": data.image,
          "title": data.name,
          "description":data.description,
          "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
          "tokenId": props.id,
          "akachiNFT": "true"
        })
        blockchain.smartContract.methods
          .nftContractAuctions(props.contract, props.id)
          .call()
          .then((res)=>{
            console.log("price:", res)
            setBuyNow(blockchain.web3.utils.fromWei(res.buyNowPrice, "ether"));
            setMinPrice(blockchain.web3.utils.fromWei(res.minPrice, "ether"));
            setBidPrice(blockchain.web3.utils.fromWei(res.minPrice, "ether"))
            setAuctionEnd(res.auctionEnd)
            setHighestPrice(blockchain.web3.utils.fromWei(res.nftHighestBid, "ether"))
            setHighestBidder(res.nftHighestBidder)
            setSeller(res.nftSeller);
          });
        setFirstLoad(false);
      }
    }
    getData();
    //eslint-disable-next-line
  }, [firstLoad]);// eslint-disable-next-line

  const onBuyNow = () => {
    const akachiTokenContract = new Web3EthContract(
      AkachiToken,
      "0x8119841E9c4e2658B36817Cfe58dfDFDca043930"
    );
    akachiTokenContract.methods
      .approve(process.env.REACT_APP_AUCTION_NFT_CONTRACT, blockchain.web3.utils.toWei(buyNow, "ether") )
      .send({ from: blockchain.account })
      .once("error", (err) => {
        console.log(err);
      })
      .then(() => {
        console.log("success");
      });
    blockchain.akachiNFT.methods
      .setApprovalForAll(process.env.REACT_APP_AUCTION_NFT_CONTRACT, true)
      .send({ from: blockchain.account })
      .once("error", (err) => {
        console.log(err);
      })
      .then(() => {
        console.log("success");
      });
    blockchain.smartContract.methods
      .makeBid(props.contract, props.id, blockchain.web3.utils.toWei(buyNow, "ether"))
      .send({ from: blockchain.account })
      .once("error", (err) => {
        console.log(err);
      })
      .then(() => {
        console.log("success");
      });
  };

  const onBid = () =>{
    if (bidPrice < minPrice){
      notify("Bid price should be over than min price.")
      return;
    }
    const akachiTokenContract = new Web3EthContract(
      AkachiToken,
      "0x8119841E9c4e2658B36817Cfe58dfDFDca043930"
    );
    akachiTokenContract.methods
      .approve(process.env.REACT_APP_AUCTION_NFT_CONTRACT, blockchain.web3.utils.toWei(buyNow, "ether") )
      .send({ from: blockchain.account })
      .once("error", (err) => {
        console.log(err);
      })
      .then(() => {
        notify("Akachi Token is approved.")
        console.log("success");
      });
      blockchain.akachiNFT.methods
      .setApprovalForAll(process.env.REACT_APP_AUCTION_NFT_CONTRACT, true)
      .send({ from: blockchain.account })
      .once("error", (err) => {
        console.log(err);
      })
      .then(() => {
        notify("NFT is approved")
        console.log("success");
      });
    blockchain.smartContract.methods
      .makeBid(props.contract, props.id, blockchain.web3.utils.toWei(bidPrice, "ether"))
      .send({ from: blockchain.account })
      .once("error", (err) => {
        console.log(err);
      })
      .then(() => {
        notify("Please wait for a while, you will be redirected to My NFT section.")
        navigate("/mynft")
        console.log("success");
      });
  } 
  return (
    <div className="bidItem-layout">
      <Container>
        <Row>
          <Col lg="4">
            <h2 className="bidItem-title">Preview item</h2>
            <Explore1Item
              title={data.title}
              image={data.image}
              description={data.description}
              price={bidPrice}
              highestBid={highestPrice}
              highestBidder={highestBidder}
              seller = {seller}
              auctionEnd = {auctionEnd}
              navable={false}
              akachiNFT = {true}
            />
          </Col>
          <Col lg="8">
            <h2 className="bidItem-title">Select method</h2>
            <Row>
              <Col lg="8">
                <button
                  className="bidItem-method selected"
                  onClick={() => onBuyNow()}
                >
                  <img src={TagImg} alt="" className="button-img" />
                  Buy Now ({buyNow})
                </button>
              </Col>
            </Row>
            <h2 className="bidItem-title">Bid Price</h2>
            <Input1
              margin="1em"
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
            />
            {/* <h2 className="bidItem-title">Buy Now</h2>
            <Input1 margin="1em" text="Enter buy now price for one item (AkachiToken)" value = {buyNow} onChange = {(e)=>setBuyNow(e.target.value)}/> */}
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <button
                className="bidItem-create-btn"
                onClick={() => onBid()}
              >
                Bid Item
              </button>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}
export default BidItem;
