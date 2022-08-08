import "./createAuction.css";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PreviewAuction from "./previewAuction"
import Input1 from "../../basic/button/input1";
import ClockImg from "../../assets/item/clock.png";
import TagImg from "../../assets/item/tag.png";
import PlaceholderImg from "../../assets/activity2/placeholder.png"
// import delay from "delay";
import axios from "axios";
// import ReactLoading from "react-loading";
import { useSelector, useDispatch } from "react-redux";
import { updateAccount } from "../../redux/blockchain/blockchainActions";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Web3EthContract from "web3-eth-contract";
// import AkachiToken from "../../contracts/AkachiToken.json";
// import EliteChess from "../../contracts/EliteChess.json"
function CreateAuction(props) {
  const [previewData, setPreviewData] = useState({
    image: null,
    title: "",
    owner: "",
    contract:"",
    tokenId:""
  });
  const [buyNow, setBuyNow] = useState(10);
  const [minPrice, setMinPrice ] = useState(5);
  const [firstLoad, setFirstLoad] = useState(true);
  const [mode, setMode] = useState(0);
  const [day, setDay] = useState(0);

  const notify = (msg) => toast(msg);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  // const data = useSelector((state) => state.data);

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

  const onCreateAuction = async () => {
    console.log("mode", mode, typeof mode);
    blockchain.akachiNFT.methods
      .setApprovalForAll(process.env.REACT_APP_AUCTION_NFT_CONTRACT, true)
      .send({ from: blockchain.account })
      .once("error", (err) => {
        console.log(err);
      })
      .then(() => {
        notify("NFT is approved.");
        console.log("success");
      });
      console.log('blockchain', blockchain);
    const creator = await blockchain.akachiNFT.methods
      .getTokenCreator(props.id -1)
      .call();
    var royalty = 0;
    if (props.contract === process.env.REACT_APP_AKACHI_NFT_CONTRACT){
       royalty = await blockchain.akachiNFT.methods.getTokenRoyal(props.id-1).call();
    }
    console.log("---", creator, royalty, mode)
    notify("Please wait for a while. The page will be redirected after creating the Auction.");
    if ( mode === 0){
      console.log("---")
      blockchain.smartContract.methods
      .createDefaultNftAuction(
        props.contract, 
        props.id, 
        blockchain.web3.utils.toWei(minPrice, "ether") , 
        blockchain.web3.utils.toWei(buyNow, "ether"),
        creator, 
        royalty )
      .send({from: blockchain.account})
      .once("error", err=>{
        console.log(err)
      })
      .then(() =>{
        notify("Please wait for a while. The page will be redirected after creating the Auction.");
        dispatch(updateAccount());
        console.log("success");
        navigate("/auction")
      })
    }
    if ( mode === 1) {
      blockchain.smartContract.methods
      .createNewNftAuction(
        props.contract, 
        props.id, 
        blockchain.web3.utils.toWei(minPrice, "ether") , 
        blockchain.web3.utils.toWei(buyNow, "ether"),
        day*3600*24,
        100,
        creator, 
        royalty )
      .send({from: blockchain.account})
      .once("error", err=>{
        console.log(err)
      })
      .then(() =>{
        notify("Please wait for a while. The page will be redirected after creating the Auction.");
        dispatch(updateAccount());
        console.log("success");
        navigate("/auction")
      })
    }
    // setLoading(false);
  }

  // const checkNFT = () =>{
  //   const length = data.auctionAddress.length;
  //   console.log("--------------", length)
  //   for (let i = 0; i < length; i++) {
  //     console.log(data.auctionAddress[i], data.auctionId[i])
  //     if (data.auctionAddress[i]=== props.contract && data.auctionId[i] === props.id){
  //       setCreated(true);
  //       blockchain.smartContract.methods
  //       .nftContractAuctions(props.contract, props.id)
  //       .call()
  //       .then((res)=>{
  //         console.log("price:", res)
  //         setHighestBid(blockchain.web3.utils.fromWei(res.nftHighestBid, "ether"));
  //         setHighestBidder(res.nftHighestBidder)
  //       });
          
  //       return;
  //     }
  //   }
  // }
  useEffect(() => {
    async function fetchData() {
      if (blockchain.account === null) {
        navigate("/");
      }
      console.log(props.id);
      const url = await getURL(props.id)
      const result = await getNFTs(url.split("https://gateway.pinata.cloud/ipfs/")[1])
      console.log("result:", result.data, );
      var previewData = result.data;

      var nowTime = new Date();
      var createTime ;
      if (previewData.createTime === undefined){
        createTime = 0;
      }else{
        createTime = new Date(previewData.createTime).getTime()
      } 
      var diff = (nowTime.getTime() -createTime)/1000;
      var secondDiff = diff - previewData.time * 3600
      if (previewData.time === 0 || secondDiff>0){
        setPreviewData({ 
          "image": previewData.image,
          "title": previewData.name,
          "owner": blockchain.account.length > 18 ? blockchain.account.substring(0, 18) + "..." : blockchain.account, 
          "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
          "tokenId": props.id,
          "akachiNFT": "true"
        })
      }
      else{
        setPreviewData({
          "image": {PlaceholderImg},
          "title": "TBD",
          "owner": blockchain.account.length > 18 ? blockchain.account.substring(0, 18) + "..." : blockchain.account, 
          "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
          "tokenId": "TBD",
          "akachiNFT": "true"
        })
      }
      setFirstLoad(false);
    }
    if (firstLoad) {
      fetchData();
      // checkNFT()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);
  return (
    <div className="createAuction-layout">
      <Container>
        <Row>
          <Col lg="4">
            <h2 className="preview-title">Preview NFT</h2>
            <div className="bottomBar"></div>
            {
              previewData.title !=="" && (
                <PreviewAuction
                  title={previewData.title}
                  image = {previewData.image}
                  owner={previewData.owner}
                  navable= {false}
                />
              )
            }
          </Col>
          <Col lg="8">
            <h2 className="createAuction-title">Select method</h2>
            
              {
                mode===0 &&
                (
                  <Row>
                    <Col lg="6">
                      <button className="createAuction-method selected">
                        <img src={TagImg} alt="" className="button-img" />
                        Fixed Price
                      </button>
                    </Col>
                    <Col lg="6">
                      <button className="createAuction-method" onClick={()=> setMode(1)}>
                        <img src={ClockImg} alt="" className="button-img" />
                        Time Auction
                      </button>
                    </Col>
                  </Row>
                )
              }
              {
                mode ===1 && (
                  <Row>
                    <Col lg="6">
                      <button className="createAuction-method" onClick={()=> setMode(0)}>
                        <img src={TagImg} alt="" className="button-img" />
                        Fixed Price
                      </button>
                    </Col>
                    <Col lg="6">
                      <button className="createAuction-method selected">
                        <img src={ClockImg} alt="" className="button-img" />
                        Time Auction
                      </button>
                    </Col>
                  </Row>
                )
              }
            <h2 className="createAuction-title">Min Price</h2>
            <Input1 margin="1em" value = {minPrice} onChange = {(e)=>setMinPrice(e.target.value)}/>
            <h2 className="createAuction-title">Buy Now</h2>
            <Input1 margin="1em" value = {buyNow} onChange = {(e)=>setBuyNow(e.target.value)}/>
            {
              mode === 1 && (
                <div>
                  <h2 className="createAuction-title">Auction Date</h2>
                  <Input1 margin="1em" text="Days for Auction" value = {day} onChange = {(e)=>setDay(e.target.value)}/>
                </div>
              )
            }
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <button className="createAuction-create-btn" onClick={() => onCreateAuction()}>Start Auction</button>
            </div>
          </Col>
          
        </Row>
        <ToastContainer />
        {/* <Modal show={loading} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Wait a min!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>We are creating the auction, please wait.</Row>
            <div className="auctionComp-loading">
              <ReactLoading type="bars" color="#fff" />
            </div>
          </Modal.Body>
        </Modal> */}
      </Container>
    </div>
  );
}
export default CreateAuction;
