import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Explore1Item from "../../explore/explore1/explore1Item";
import axios from "axios";

import "./mynft.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

import PlaceholderImg from "../../../assets/activity2/placeholder.png"
function Mynft() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const blockchain = useSelector((state) => state.blockchain);
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
      // const url =
      //   "https://testnets-api.opensea.io/api/v1/assets?owner=" +
      //   blockchain.account +
      //   "&offset=0&limit=200";
      // axios.get(url).then((res) => {
      //   res.data.assets.map((item, index) => {
      //     if (
      //       item.asset_contract.address === process.env.REACT_APP_AKACHI_NFT_CONTRACT
      //     ) {
      //       console.log(item);
      //     } else {
      //       temp.push({
      //         "image": item.image_url,
      //         "title": item.name,
      //         "owner": blockchain.account.length > 12 ? blockchain.account.substring(0, 12) + "..." : blockchain.account, 
      //         "contract": item.asset_contract.address,
      //         "tokenId": item.token_id,
      //         "akachiNFT": "false"
      //       });
      //     }
      //     return <></>;
      //   });
      // });
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
          var data = result.data;
          // var data = JSON.parse(result.data)
          console.log(data)
          var nowTime = new Date();
          var createTime ;
          if (data.createTime === undefined){
            createTime = 0;
          }else{
            createTime = new Date(data.createTime).getTime()
          } 
          var diff = (nowTime.getTime() -createTime)/1000;
          var secondDiff = diff - data.time * 3600
          if (data.time === 0 || secondDiff>0){
            temp.push({ 
              "image": data.image,
              "title": data.name,
              "owner": blockchain.account.length > 12 ? blockchain.account.substring(0, 12) + "..." : blockchain.account, 
              "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
              "tokenId": i+1,
              "akachiNFT": "true"
            })
          }
          else{
            temp.push({ 
              "image": {PlaceholderImg},
              "title": "TBD",
              "owner": blockchain.account.length > 12 ? blockchain.account.substring(0, 12) + "..." : blockchain.account, 
              "contract": process.env.REACT_APP_AKACHI_NFT_CONTRACT,
              "tokenId": "TBD",
              "akachiNFT": "true"
            })

          }
        }
      }
      setData(temp);
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
        <Row>
          <h2 className="mynft-title">My NFT</h2>
          <p className="mynft-text">You can view your NFTs here.</p>
        </Row>
        <Row>
          {data.length === 0 &&  !loading &&(
            <p className="mynft-empty">You have NO NFT at all.</p>
          )}
          {loading && (
            <div className="mynft-loading">
              <ReactLoading type="bars" color="#fff" />
            </div>
            
          )}
          {data.map((item, index) => {
            return (
              <Col lg="3" key={index}>
                <Explore1Item
                  image={item.image}
                  title={item.title}
                  // net={item.net}
                  owner={item.owner}
                  contract={item.contract}
                  tokenId={item.tokenId}
                  navable={true}
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
