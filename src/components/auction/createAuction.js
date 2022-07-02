import "./createAuction.css";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PreviewAuction from "./previewAuction"
import Input1 from "../../basic/button/input1";
// import ClockImg from "../../assets/item/clock.png";
import TagImg from "../../assets/item/tag.png";
// import PeopleImg from "../../assets/item/people.png";

import axios from "axios";
// import ReactLoading from "react-loading";
import { useSelector, useDispatch } from "react-redux";
import { updateAccount } from "../../redux/blockchain/blockchainActions";
import { useNavigate } from "react-router-dom";
import Web3EthContract from "web3-eth-contract";
// import AkachiToken from "../../contracts/AkachiToken.json";
import EliteChess from "../../contracts/EliteChess.json"
function CreateAuction(props) {
  const [data, setData] = useState([]);
  const [owner, setOwner ] = useState("")
  const [buyNow, setBuyNow] = useState(0);
  const [minPrice, setMinPrice ] = useState(0);
  // const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  

  const onCreateAuction = async () => {
    // console.log(minPrice, buyNow)
    // setLoading(true);
    const erc721Contract = new Web3EthContract ( 
      EliteChess, 
      "0x26D4025EA3B66EA8987B1b1F9B23F9AfCA1eFe11"
     )
     // approve auction contract
    erc721Contract.methods
      .setApprovalForAll(process.env.REACT_APP_AUCTION_NFT_CONTRACT, true)
      .send({from: blockchain.account})
      .once("error", err=>{
        console.log(err)
      })
      .then(() =>{
        console.log("success");
      })
    var nftUrl = "https://testnets-api.opensea.io/api/v1/asset/"+ props.contract + "/" + props.id;
    var nftData = await axios.get(nftUrl)
console.log("nftData", nftData);
    var creator= nftData.data.creator.address;
    var royalty = 0;
    if (props.contract === process.env.REACT_APP_AKACHI_NFT_CONTRACT){
       royalty = await blockchain.akachiNFT.methods.getTokenRoyal(props.id-1).call();
    }
    console.log("---", creator, royalty)
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
        dispatch(updateAccount());
        console.log("success");
        navigate("/auction")
      })
    // setLoading(false);
  }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);
  return (
    <div className="createAuction-layout">
      <Container>
        <Row>
          <Col lg="4">
            <h2 className="createAuction-title">Preview item</h2>
            <PreviewAuction
              title={data.title}
              image = {data.image}
              // net="BSC"
              owner={owner}
              // price="Current Bid"
              // priceItem="4.89ETH"
              bidding={false}
              navable= {false}
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
            <h2 className="createAuction-title">Min Price</h2>
            <Input1 margin="1em" text="Enter minimum price for one item (AkachiToken)" value = {minPrice} onChange = {(e)=>setMinPrice(e.target.value)}/>
            <h2 className="createAuction-title">Buy Now</h2>
            <Input1 margin="1em" text="Enter buy now price for one item (AkachiToken)" value = {buyNow} onChange = {(e)=>setBuyNow(e.target.value)}/>
            
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <button className="createAuction-create-btn" onClick={() => onCreateAuction()}>Start Auction</button>
            </div>
          </Col>
        </Row>
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
