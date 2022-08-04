import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

import "./mynft.css";
import MyNFTItem from "./mynftItem.js"
import PlaceholderImg from "../../../assets/activity2/placeholder.png"
function Mynft() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  let navigate = useNavigate();

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
    async function fetchData() {
      setLoading(true);
      if (blockchain.account === null) {
        navigate("/");
      }
      const temp = [];
      var indexes;
      try{
        indexes = await blockchain.akachiNFT.methods
          .balanceOfAccount(blockchain.account)
          .call();
      }catch(err){
        console.log(err)
        setLoading(false);
        return;
      }
      for ( var i = 0 ; i< indexes.length; i++){
        if (indexes[i] === "1"){
          const url = await getURL(i+1)
          const result = await getNFTs(url.split("https://gateway.pinata.cloud/ipfs/")[1])
          console.log("result:", result.data, );
          var resultData = result.data;
          // var data = JSON.parse(result.data)
          console.log(resultData)
          var nowTime = new Date();
          var createTime ;
          if (resultData.createTime === undefined){
            createTime = 0;
          }else{
            createTime = new Date(resultData.createTime).getTime()
          } 
          var diff = (nowTime.getTime() -createTime)/1000;
          var secondDiff = diff - resultData.time * 3600

          const length = data.auctionAddress.length;
          var navable= true;
          for (let j = 0; j < length; j++) {
            console.log("00", typeof i,  typeof data.auctionId[j])
            if (parseInt(data.auctionId[j]) === ( i + 1)){
              navable = false;
            }
          }
          if (resultData.time === 0 || secondDiff>0){
            temp.push({ 
              "image": resultData.image,
              "title": resultData.name,
              "owner": blockchain.account.length > 12 ? blockchain.account.substring(0, 12) + "..." : blockchain.account, 
              "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
              "tokenId": i+1,
              "akachiNFT": true,
              "navable": navable,
            })
          }
          else{
            temp.push({ 
              "image": {PlaceholderImg},
              "title": "TBD",
              "owner": blockchain.account.length > 12 ? blockchain.account.substring(0, 12) + "..." : blockchain.account, 
              "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
              "tokenId": "TBD",
              "akachiNFT": true,
              "navable": navable,
            })

          }
        }
      }
      setItems(temp);
      setFirstLoad(false);
      setLoading(false);
      console.log(temp);
    }
    if (firstLoad) {
      fetchData();
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);
  return (
    <div className="mynft-layout">
      <Container>
        <div className="mynft-title-layout">
          <h2 className="mynft-title">My Address</h2>
          <div className="bottomBar"></div>
          <p className="mynft-text">{blockchain.account}</p>
        </div>
        <Row>
          {items.length === 0 &&  !loading &&(
            <p className="mynft-empty">You have no NFTs! Please upload some for your legacy!</p>
          )}
          {loading && (
            <div className="mynft-loading">
              <ReactLoading type="bars" color="#fff" />
            </div>
            
          )}
          {items.map((item, index) => {
            return (
              <Col xl="3" lg="4" sm="6" key={index}>
                <MyNFTItem
                  image={item.image}
                  title={item.title}
                  // net={item.net}
                  owner={item.owner}
                  contract={item.contract}
                  tokenId={item.tokenId}
                  navable={item.navable}
                  akachiNFT = {item.akachiNFT}
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
